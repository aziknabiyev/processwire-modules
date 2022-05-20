<?php require 'inc/header.inc'; ?>

<div id="all_parts">


    <section class="social">
        <div class="container-fluid">
            <div class="row g-0">
                <?php foreach ($page->children as $it): ?>
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                    <a href="<?= $it->url; ?>" class="social__item">
                        <div class="social__img">
                            <img src="<?= $it->image->url; ?>" alt="">
                        </div>
                        <div class="social__text">
                            <span class="social__date"><?= $it->date; ?></span>
                            <h2 class="social__title"><?= $it->title; ?></h2>
                        </div>
                    </a>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
<!--        <a href="#" class="btn btn-full">Load more</a>-->
    </section>


</div>

<?php require 'inc/footer.inc'; ?>
