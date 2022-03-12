import { Types, disconnect } from 'mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateQueryDTO } from 'src/query/dto/create-query.dto';

const project_id = new Types.ObjectId().toHexString();
const TestDTO: CreateQueryDTO = {
  url: 'test.ru',
  title: 'Test',
  method: 'post',
  params: [],
  headers: [],
  body: '{ a = 1 }',
  doc: '# TEST',
  project_id,
};

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/query/ (POST)', async () => {
    try {
      const data = await request(app.getHttpServer())
        .post('/query')
        .send(TestDTO)
        .expect(201);
      expect(data.body._id).toBeDefined();
      createdId = data.body._id;
    } catch (er) {
      console.log(er);
    }
  });
  it('/query/?id (PATCH)', async () => {
    try {
      const data = await request(app.getHttpServer())
        .patch('/query/?id=' + createdId)
        .send({ title: 'TEST' })
        .expect(200);
      expect(data.body.title).toBe('TEST');
    } catch (er) {
      console.log(er);
    }
  });

  it('/query/?id (GET)', async () => {
    try {
      const data = await request(app.getHttpServer())
        .get('/query/?id=' + createdId)
        .expect(200);
      expect(data.body._id).toBe(createdId);
    } catch (er) {
      console.log(er);
    }
  });
  it('/query/?project_id (GET)', async () => {
    try {
      const data = await request(app.getHttpServer())
        .get('/query/?project_id=' + project_id)
        .expect(200);
      expect(data.body.length).toBe(1);
    } catch (er) {
      console.log(er);
    }
  });

  it('/query/?id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/query/?id=' + createdId)
      .expect(200);
  });
  it('/query/?project_id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/query/?project_id=' + project_id)
      .expect(200);
  });

  afterAll(() => {
    disconnect();
  });
});
