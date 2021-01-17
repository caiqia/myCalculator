FROM php:7.3-fpm-alpine
# COPY wait-for-it.sh /usr/bin/wait-for-it
# RUN chmod +x /usr/bin/wait-for-it
RUN apk --update --no-cache add git
RUN docker-php-ext-install pdo_mysql
# on télécharge et deplace le composer
RUN curl -sSk https://getcomposer.org/installer | php -- --disable-tls && \
   mv composer.phar /usr/local/bin/composer
COPY --from=composer /usr/bin/composer /usr/bin/composer
WORKDIR /var/www
CMD composer install --ignore-platform-reqs ; php-fpm
EXPOSE 9000
