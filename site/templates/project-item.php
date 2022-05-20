

<?php require 'inc/header.inc'; ?>

<div id="all_parts">


    <section class="projects-inner">
        <div class="container-fluid">
            <div class="row g-0">
                <div class="col-lg-6" data-aos="fade-right" data-aos-delay="250" data-aos-duration="700">
                    <div class="projects-inner__main-img">
                        <img src="<?= $page->project[0]->img1->url; ?>" alt="">
                    </div>
                </div>
                <div class="col-lg-6" data-aos="fade-left" data-aos-delay="250" data-aos-duration="700">
                    <div class="projects-inner__desc">
                        <div class="tab">
                            <div class="tab__links">
                                <?php foreach ($page->project as $k=>$it): ?>
                                <a href="#" class="tab__links__item <?= (!$k) ? 'active' : ''; ?>" data-tab="tab<?= $k; ?>"><?= $it->title; ?></a>
                                <?php endforeach; ?>
                            </div>
                            <div class="tab__content">
                                <?php foreach ($page->project as $k=>$it): ?>
                                <div class="tab__content__item <?= (!$k) ? 'active' : ''; ?>" data-tab="tab<?= $k; ?>">
                                <?= $it->sidebar; ?>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="section-title"><?= _x('Projects images','-'); ?></h4>
            <div class="row g-0">
            <?php foreach ($page->images as $img): ?>
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                    <div class="projects-inner__img">
                        <img src="<?= $img->url; ?>" alt="">
                    </div>
                </div>
            <?php endforeach; ?>


            </div>
            <?php $next_page=($page->parent->children('sort=-sort')[0]->id==$page->next()->id) ? $page->parent->child() : $page->next(); ?>
            <div class="next-project">
                <div class="next-project__img">
                    <img src="<?= $next_page->img1->url; ?>" alt="">
                </div>
                <div class="next-project__desc pages-head d-block">
                    <a class="next-project__btn" href="#" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                        <?= _x('Next project','-'); ?>
                    </a>
                    <a href="<?= $next_page->url; ?>" class="pages-title" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                        <?= $next_page->title; ?>
                    </a>
                    <ul>
                        <?php foreach ($next_page->services as $it): ?>
                        <li data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                            <a href="<?= $it->url; ?>"><?= $it->title; ?></a>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </div>
    </section>


</div>

<?php require 'inc/footer.inc'; ?>
