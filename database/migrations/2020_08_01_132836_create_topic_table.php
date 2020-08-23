<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTopicTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('topic', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->index();
            $table->unsignedBigInteger('subcategories_id')->index();
            $table->string('title');
            $table->string('image')->nullable();
            $table->longText('content');
            $table->string('slug')->unique()->index();
            $table->integer('messages')->default(0);
            $table->integer('likes')->default(0);
            $table->integer('views')->default(0);
            $table->enum('status', [
                'Draft',        // Черновик
                'Published',    // Опубликован
            ])->default('Draft');
            $table->boolean('b2b')->default(false);
            $table->timestamp('published_at');
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
        Schema::dropIfExists('topic');
    }
}
