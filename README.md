# EasyWeek Website Business v0.1.0

## Quick start

---

### ⚙️ Backend Developer

#### 1. Add the records into `/etc/hosts` file

```
127.0.0.1 easyweek-website-business-redis
127.0.0.1 easyweek-website-business-mysql
```

#### 2. Update your `.env` file

```bash
cp .env.docker .env
```

#### 3. Composer installation

```bash
composer install
```

#### 4. Run the backend

The Laravel project you can find of `localhost:5391`.

```bash
cd api
docker-compose up --build
```

⚡ `--build` is needed `ONLY` for the first time.

#### 5. Migrate Database (if needed)

```bash
docker exec -it easyweek-website-business-php sh -c "php artisan migrate:fresh --seed --force --no-interaction -vvv"
```

#### 6. Laravel Key Generation

```bash
docker exec -it easyweek-website-business-php sh -c "php artisan key:generate"
``

🍻 Enjoy!
```

#### Backend URL

```
    http://127.0.0.1:5398/api/ping
```
