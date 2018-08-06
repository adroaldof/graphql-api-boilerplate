# GraphQL API Boilerplate

This is a opinionated GraphQL API Boilerplate that you can use to your needs.

## Run project (the easy way)

To run this project you will need [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)

With all configured just run

```bash
docker-compose up
```

Check the results at [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

Enjoy it 👍

## Run project (the hard way)

To run this project with just [Docker](https://www.docker.com/)

ou will need a bridge network to connect our API to database.

```bash
# Create a Docker Network
docker create network --driver=bridge boilerplate-network
```

Nwo will need to run our [Postgres](https://www.postgresql.org/) database to connect to. We will use docker to make this job

```bash
# Run Postgres
docker run \
  --rm \
  --name graphql-api-db \
  --net boilerplate-network \
  --env POSTGRES_USER='postgres' \
  --env POSTGRES_PASSWORD='postgres' \
  --env POSTGRES_DB='postgres' \
  --publish 5432:5432 \
  --volume 'database:/var/lib/postgresql/data' \
  postgres:11-alpine
```

Now we can build our api with the follow command

```bash
# Build API
docker build -t $(whoami)/graphql-api .
```

Now you can run the api project

```bash
# Run API
docker run \
  --rm \
  --name graphql-api \
  --net boilerplate-network \
  --env DATABASE_HOST='graphql-api-db' \
  --publish 3000:3000 \
  $(whoami)/graphql-api
```

Check the results at [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

Enjoy it 👍
