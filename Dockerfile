FROM dunglas/frankenphp:php8.3

# Install PHP extensions
RUN install-php-extensions \
    pcntl \
    pdo_mysql \
    intl \
    zip \
    oci8

WORKDIR /app

# Copy application files
COPY . /app

# Copy Composer from official image
COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer

# Install dependencies
RUN composer install --no-interaction && \
    composer require laravel/octane && \
    php artisan octane:install --server=frankenphp

# Set environment variables
ENV SERVER_NAME=":8000"
ENV FRANKENPHP_CONFIG="worker /app/public/frankenphp-worker.php"

EXPOSE 8000

# Start FrankenPHP with specified Caddyfile
ENTRYPOINT ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]
