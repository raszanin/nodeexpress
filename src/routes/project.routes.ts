import Router from 'express';

const projects = Router();

projects.get('/', (request, response) => {
  return response.json({ message: 'get ok' });
});

projects.post('/', (request, response) => {
  return response.json({ message: 'post ok' });
});

projects.patch('/', (request, response) => {
  return response.json({ message: 'patch ok' });
});

projects.delete('/', (request, response) => {
  return response.json({ message: 'delete ok' });
});

export default projects;
