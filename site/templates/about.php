<?php require 'inc/header.inc'; ?>


<div id="all_parts">
    <section class="about">
        <div class="container-fluid pe-md-0">
            <h4 class="section-title"><?= _x('Universal group of companies consists of 4 main organizations','-'); ?></h4>
            <div class="projects">
                <?php foreach ($page->list as $it): ?>
                <a href="<?= $it->redirect->url; ?>" class="row g-0 projects__item" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                    <div class="col-md-5">
                        <div class="projects__img">
                            <img src="<?= $it->img1->url; ?>" alt="">
                        </div>
                    </div>
                    <div class="col-md-6 d-flex align-items-center justify-content-between ms-auto">
                        <div class="projects__desc">
                            <h2 class="projects__title"><?= $it->title; ?></h2>
                            <p><?= $it->headline; ?></p>
                        </div>
                        <span class="btn projects__btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" class="m-0">
                                <use xlink:href="#svg-arrow-right2"></use>
                            </svg>
                        </span>
                    </div>
                </a>
                <?php endforeach; ?>

            </div>
        </div>
        <div class="vision">
            <div class="container-fluid pe-md-0">
                <div class="row g-0">
                    <div class="col-md-6 ">
                        <div class="vision__left">
                            <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="700"><?= $page->summary; ?></p>
                            <div class="vision__left__pattern">
                                <img src="<?= $base; ?>images/services-page-pattern.svg" alt="" data-aos="fade-up" data-aos-delay="250"
                                     data-aos-duration="700">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="vision__right">
                            <?php foreach ($page->list2 as $it): ?>
                            <div class="vision__right__item" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                                <h3><?= $it->title; ?></h3>
                                <p><?= $it->headline; ?></p>
                            </div>
                            <?php endforeach; ?>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php $block=$page->block[0]; ?>
        <div class="perspectives">
            <div class="container-fluid">
                <div class="row g-0">
                    <div class="col-md-5">
                        <div class="perspectives__img">
                            <img src="<?= $block->img1->url; ?>" alt="" data-aos="fade-right" data-aos-delay="250"
                                 data-aos-duration="700">
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="perspectives__text" data-aos="fade-left" data-aos-delay="250" data-aos-duration="700">
                            <h3><?= $block->title; ?></h3>
                            <?= $block->sidebar; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="values">
            <div class="container-fluid">
                <h4 class="section-title">Values</h4>
                <div class="row">
                    <?php foreach ($page->list3 as $it): ?>
                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                        <div class="values__item">
                            <div class="values__icon">
                                <img src="<?= $it->img1->url; ?>" alt="">
                            </div>
                            <h3><?= $it->title; ?></h3>
                            <p><?= $it->headline; ?></p>
                        </div>
                    </div>
                    <?php endforeach; ?>

                </div>
            </div>
        </div>
        <div class="contact-section">
            <div class="contact-section__img">
                <img src="<?= $page->img2->url; ?>" alt="">
            </div>
            <div class="container-fluid">
                <div class="contact-section__text">
                    <h2 data-aos="fade-up" data-aos-delay="250" data-aos-duration="700"><?= _x('Contact with us','-'); ?></h2>
                    <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">We strive to create an open and transparent
                        atmosphere, where employees are motivated through
                        communication, being focused on working cooperatively.</p>
                    <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                        <a href="#" class="btn btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                                <use xlink:href="#svg-arrow-right2"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<?php require 'inc/footer.inc'; ?>
