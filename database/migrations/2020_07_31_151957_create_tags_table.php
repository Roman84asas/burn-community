<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags', function (Blueprint $t) {
            $t->increments('id');
            $t->string('name')->unique();
            $t->string('count')->index();
        });

        Schema::create('topic_tags', function (Blueprint $t) {
            $t->increments('id');
            $t->unsignedInteger('topic_id')->index();
            $t->unsignedInteger('tag_id')->index();

            $t->unique(['topic_id', 'tag_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('tags');
        Schema::dropIfExists('topic_tags');
    }
}
