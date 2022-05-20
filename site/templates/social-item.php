<?php require 'inc/header.inc'; ?>



<div id="all_parts">
    <section class="news-inner">
        <div class="container-fluid">
            <div class="content">
                <div class="content__block">
                    <div class="pages-head d-block">
                        <span data-aos="fade-down" data-aos-delay="250" data-aos-duration="700"><?= $page->date; ?></span>
                        <h1 class="pages-title" data-aos="fade-down" data-aos-delay="250" data-aos-duration="700"><?= $page->title; ?></h1>
                        <ul data-aos="fade-down" data-aos-delay="350" data-aos-duration="700">
                            <li><a href="#">Construction</a></li>
                            <li><a href="#">Engineering</a></li>
                            <li><a href="#">Heavy Equipment</a></li>
                        </ul>
                    </div>
                    <?php foreach ($page->block as $block): ?>
                        <?php if($block->img1->url): ?>
                            <div class="content__img">
                                <img src="<?= $block->img1->url; ?>" alt="" data-aos="fade-up" data-aos-delay="350" data-aos-duration="700">
                            </div>
                        <?php elseif(count($block->images)==2): ?>
                            <div class="row">
                                <?php foreach ($block->images as $img): ?>
                                    <div class="col-md-6" data-aos="fade-right" data-aos-delay="350" data-aos-duration="700">
                                        <div class="content__img">
                                            <img src="<?= $img->url; ?>" alt="">
                                            <span><?= $img->description; ?></span>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        <?php elseif(count($block->images)>2): ?>

                            <div class="carousel-container" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                                <div class="carousel-nav">
                                    <?php foreach ($block->images as $img): ?>
                                        <div class="carousel-cell">
                                            <img src="<?= $img->url; ?>" alt="">
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                                <div class="carousel carousel-main">
                                    <?php foreach ($block->images as $img): ?>
                                        <div class="carousel-cell">
                                            <img src="<?= $img->url; ?>" alt="">
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>
                        <?= $block->body; ?>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="other-block">
                <h4 class="other-block__title" data-aos="fade-down" data-aos-delay="250" data-aos-duration="700"><?= _x('Other news','-'); ?></h4>
                <div class="row g-0">
                    <?php foreach ($page->parent->children("id!=$page->id,limit=2") as $it): ?>
                        <div class="col-md-6" data-aos="fade-right" data-aos-delay="250" data-aos-duration="700">
                            <a href="#" class="news__item">
                                <div class="news__img" style='background-image: url("../images/news.jpg")'>
                                </div>
                                <div class="news__text">
                                    <span class="news__date"><?= $it->date; ?></span>
                                    <h3 class="news__title"><?= $it->title; ?></h3>
                                    <ul class="news__category">
                                        <li>Construction</li>
                                        <li>Engineering</li>
                                        <li>Heavy Equipment</li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    <?php endforeach; ?>
                </div>
                <a href="<?= $page->parent->url; ?>" class="btn btn-full"><?= _x('View all news','-'); ?></a>
            </div>
        </div>
    </section>


</div>

<?php require 'inc/footer.inc'; ?>
