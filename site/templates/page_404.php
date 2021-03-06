

<?php require 'inc/header.inc'; ?>


<div id="all_parts">



    <div class="page_404">
        <div class="image">
            <img src="<?= $base; ?>images/svg-icons/bg_404.svg" alt="">
        </div>
        <h1><?= _x('Oops! Page not found','-'); ?></h1>
        <p><?= _x('We can’t seem to find the page you are looking for','-'); ?></p>
        <div class="link">
            <a href="<?= $home->url; ?>" class="btn">
                <?= _x('Back to home page','-'); ?>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                    <use xlink:href="#svg-arrow-right2"></use>
                </svg>
            </a>
        </div>
    </div>


</div>

<?php require 'inc/footer.inc'; ?>
