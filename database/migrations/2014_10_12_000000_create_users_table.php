<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('google_id');
            $table->string('vkontakte_id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password')->nullable();
            $table->string('avatar')->nullable();
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->string('linkedIn')->nullable();
            $table->string('instagram')->nullable();
            $table->string('vkontakte')->nullable();
            $table->string('veb_site')->nullable();
            $table->string('birthday')->nullable();
            $table->boolean('is_admin')->default(0);
            $table->boolean('is_moderator')->default(0);
            $table->boolean('b2b')->default(0);
            $table->integer('messages')->default(0);
            $table->integer('likes')->default(0);
            $table->integer('dislike')->default(0);
            $table->dateTime('last_activity')->nullable();
            $table->boolean('is_confirmed')->default(false);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
