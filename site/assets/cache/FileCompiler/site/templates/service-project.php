<?php require(\ProcessWire\wire('files')->compile('inc/header.inc',array('includes'=>true,'namespace'=>true,'modules'=>true,'skipIfNamespace'=>true))); ?>


<div id="all_parts">
    <section class="services-page">
        <div class="container-fluid pe-lg-0">
            <div class="pages-head row g-0">
                <div class="col-md-6">
                    <h1 class="pages-title" data-aos="fade-down" data-aos-delay="250" data-aos-duration="700"><?= $page->title; ?></h1>
                </div>
                <div class="col-md-6" data-aos="fade-left" data-aos-delay="250" data-aos-duration="700">
                    <?= $page->sidebar; ?>
                </div>
            </div>
            <div class="row g-0 align-items-end services-page__item">
                <div class="col-md-6" data-aos="fade-right" data-aos-delay="250" data-aos-duration="700">
                    <div class="services-page__desc">
                        <div class="services-page__text">
                            <?= $page->body; ?>
                            <a href="<?= $page->http; ?>" class="btn btn-medium d-md-none">
                                <?= \ProcessWire\_x('Visit company website','-'); ?>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                                    <use xlink:href="#svg-arrow-right2"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6" data-aos="fade-left" data-aos-delay="250" data-aos-duration="700">
                    <div class="services-page__img">
                        <img src="<?= $page->img2->url; ?>" alt="">
                    </div>
                    <a href="<?= $page->http; ?>" class="btn btn-medium d-md-flex d-none">
                        <?= \ProcessWire\_x('Visit company website','-'); ?>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                            <use xlink:href="#svg-arrow-right2"></use>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="projects">
                <h4 class="section-title"><?= \ProcessWire\_x('Successfully completed projects','-'); ?></h4>
                <?php foreach ($projects->children as $it): ?>
                    <div class="row g-0 projects__item">
                        <div class="col-md-4" data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
                            <a href="<?= $it->url; ?>" class="projects__img">
                                <img src="<?= $it->image->url; ?>" alt="">
                            </a>
                        </div>
                        <div class="col-md-8 d-flex align-items-center justify-content-between" data-aos="fade-up" data-aos-delay="150"
                             data-aos-duration="700">
                            <div class="projects__desc">
                                <a href="<?= $it->url; ?>" class="projects__title"><?= $it->title; ?></a>
                                <p><?= $it->headline; ?></p>
                                <ul>
                                    <?php foreach ($it->services as $serv): ?>
                                        <li><a href="<?= $serv->url; ?>"><?= $serv->title; ?></a></li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                            <a href="<?= $it->url; ?>" class="btn projects__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" class="m-0">
                                    <use xlink:href="#svg-arrow-right2"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <a href="<?= $projects->url; ?>" class="btn btn-full mt-5"><?= \ProcessWire\_x('View all projects','-'); ?></a>
        <div class="container-fluid">
            <div class="partners">
                <h4 class="section-title">Our customers</h4>
                <div class="tab-item">
                    <div class="partners__block">
                        <ul class="partners__row">
                            <li data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                                <a href="#" class="" aria-label="rockwool">
                                    <img src="images/rockwool.svg" alt="">
                                </a>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="350" data-aos-duration="700">
                                <a href="#" class="" aria-label="man">
                                    <img src="images/man.svg" alt="">
                                </a>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="450" data-aos-duration="700">
                                <a href="#" class="" aria-label="bosch">
                                    <img src="images/bosch.svg" alt="">
                                </a>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="550" data-aos-duration="700">
                                <a href="#" class="" aria-label="chicago">
                                    <img src="images/chicago.svg" alt="">
                                </a>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="650" data-aos-duration="700">
                                <a href="#" class="" aria-label="3m">
                                    <img src="images/3m.svg" alt="">
                                </a>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="750" data-aos-duration="700">
                                <a href="#" class="" aria-label="rupes">
                                    <img src="images/rupes.svg" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" class="btn partners__btn">
                        <span>view other 65</span>
                    </a>
                </div>
            </div>
        </div>
        <?php $next_page=($page->parent->children('sort=-sort')[0]->id==$page->next()->id) ? $page->parent->child() : $page->next(); ?>

        <div class="contact-section">
            <div class="contact-section__img">
                <img src="<?= $next_page->img1->url; ?>" alt="">
            </div>
            <div class="container-fluid">
                <div class="contact-section__text">
                    <span data-aos="fade-up" data-aos-delay="250" data-aos-duration="700"><?= \ProcessWire\_x('Next service','-'); ?></span>
                    <h2 data-aos="fade-up" data-aos-delay="250" data-aos-duration="700"><?= $next_page->title; ?></h2>
                    <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="700"><?= strip_tags($next_page->sidebar); ?></p>
                    <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                        <a href="<?= $next_page->url; ?>" class="btn btn-icon">
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

<?php require(\ProcessWire\wire('files')->compile('inc/footer.inc',array('includes'=>true,'namespace'=>true,'modules'=>true,'skipIfNamespace'=>true))); ?>
