

<?php require 'inc/header.inc'; ?>


<div id="all_parts">


    <section class="h-r">
        <div class="h-r__banner">
            <div class="row g-0">
                <div class="col-md-6">
                    <div class="h-r__img">
                        <img src="<?= $page->img1->url; ?>" alt="">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="h-r__desc">
                        <div class="h-r__text">
                            <h1 class="h-r__title" ><?= $page->headline; ?></h1>
                            <?= $page->body; ?>
                            <div data-aos="fade-left" data-aos-delay="250" data-aos-duration="700">
                                <a href="#" class="btn btn-medium scroll_to" data-anchor="send_vacancy">
                                    <?= _x('Send a resume','-'); ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                                        <use xlink:href="#svg-arrow-right2"></use>
                                    </svg>
                                </a>
                            </div>
                            <div data-aos="fade-left" class="all_link scroll_to" data-anchor="vcancies_list" data-aos-delay="250" data-aos-duration="700">
                                <a href="javascript:void(0);"><?= _x('All vacancies','-'); ?></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-r__vacancies" data-appoint="vcancies_list">
            <div class="container-fluid">
                <h4 class="section-title"><?= _x('Vacancies for you','-'); ?></h4>
                <div class="row g-0">
                    <?php foreach ($page->children as $it): ?>
                    <div class="col-md-6" data-aos="fade-right" data-aos-delay="250" data-aos-duration="700">
                        <a href="<?= $it->url; ?>" class="h-r__vacancies__item">
                            <span class="h-r__vacancies__date">
                                  <?php $dt=explode('.',$it->date); ?>
                                  <?= $dt[0].' '.$_months[$dt[1]].' '.$dt[2]; ?>
                                  -
                                  <?php $dt=explode('.',$it->date2); ?>
                                  <?= $dt[0].' '.$_months[$dt[1]].' '.$dt[2]; ?>
                            </span>
                            <h3 class="h-r__vacancies__title"><?= $it->title; ?></h3>
                            <ul class="h-r__vacancies__info">
                                <?php foreach ($it->list_s as $list): ?>
                                <li><?= $list->title; ?></li>
                                <?php endforeach; ?>
                            </ul>
                        </a>
                    </div>
                    <?php endforeach; ?>

<!--                    <a href="#" class="btn d-md-none w-100 text-center">Load more</a>-->
                </div>
            </div>
        </div>
       <?php require 'inc/apply.inc'; ?>
    </section>


</div>

<?php require 'inc/footer.inc'; ?>
