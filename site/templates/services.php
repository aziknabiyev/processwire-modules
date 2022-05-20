<?php require 'inc/header.inc'; ?>


<div id="all_parts">


    <section class="projects-page">
        <div class="container-fluid pe-md-0">
            <div class="tab">

                <div class="tab__content">
                    <div class="tab__content__item active" data-tab="tab1">
                        <div class="projects">
                            <?php foreach ($page->children as $it): ?>
                                <div class="row g-0 projects__item">
                                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
                                        <a href="<?= $it->url; ?>" class="projects__img">
                                            <img src="<?= $it->img2->url; ?>" alt="">
                                        </a>
                                    </div>
                                    <div class="col-md-8 d-flex align-items-center justify-content-between" data-aos="fade-up" data-aos-delay="150"
                                         data-aos-duration="700">
                                        <div class="projects__desc">
                                            <a href="<?= $it->url; ?>" class="projects__title"><?= $it->title; ?></a>
                                            <?= $it->sidebar; ?>
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


                </div>
            </div>
        </div>
        <!--        <a href="#" class="btn btn-full mt-4">Load more</a>-->
    </section>


</div>

<?php require 'inc/footer.inc'; ?>
