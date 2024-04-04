import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // CORS 설정
  app.enableCors({
    origin: 'http://localhost:5173', // 허용할 오리진
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE', // 허용할 HTTP 메서드
    allowedHeaders: 'Authorization, Content-Type', // 허용할 요청 헤더
  });
  await app.listen(3000);
}
bootstrap();
