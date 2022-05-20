<?php namespace ProcessWire; ?>


<div class="request-form">
   <div class="request-form__blur"></div>
   <div id="app" class="request-form__body">
       <h3 class="request-form__title"><?= _x('Request form','-'); ?></h3>
      <a href="javascript:void(0);" class="burger-nav__close d-flex">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <use xlink:href="#svg-close"></use>
         </svg>
      </a>
       <form @submit.prevent="checkForm" action="" v-if="!savingSuccessful" method="post">
           <input type="hidden" name="action" value="contact">
           <input type="hidden" name="item" value="<?= $page->id; ?>">
           <?php $form_inputs=['fullname'=>_x('Fullname','-'),'phone'=>_x('Phone','-'),'email'=>_x('Email','-')]; ?>
           <?php foreach ($form_inputs as $k=>$it): ?>
               <div class="form-group form-floating">
                   <input type="text"
                          id="<?= $k; ?>"
                          :class="{ alert: !<?= $k; ?> && errors.length }"
                          name="<?= $k; ?>"
                       <?= ($k=='phone') ? 'v-mask="\'+994 ## ### ## ##\'"' : ''; ?>
                          v-model="<?= $k; ?>"
                          class="form-control "
                          placeholder="<?= $it; ?>">
                   <label for="<?= $k; ?>"><?= $it; ?></label>
               </div>
           <?php endforeach; ?>
           <div class="form-group form-floating">
                        <textarea name="message"
                                  :class="{ alert:!message && errors.length }"
                                  v-model="message"
                                  class="form-control"
                                  rows="5"
                                  placeholder="<?= _x('Your message','-'); ?>"></textarea>
               <label for=""><?= _x('Your message','-'); ?></label>
           </div>
           <button type="submit" style="border:none;" class="btn btn-medium w-100">
               <?= _x('Learn more','-'); ?>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                   <use xlink:href="#svg-arrow-right2"></use>
               </svg>
           </button>
       </form>
       <div class="success_block" v-if="savingSuccessful">
           <div class="icon">
               <img src="<?= $base; ?>images/svg-icons/success_icon.svg?v=2" alt="">
           </div>
           <h2><?= _x('Your form succesufully sent','-'); ?></h2>
           <p><?= _x('Our specialists will contact you to clarify your request','-'); ?></p>
           <div class="link">
               <a href="<?= $page->url; ?>" class="btn">
                   <?= _x('Send new form','-'); ?>
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                       <use xlink:href="#svg-arrow-right2"></use>
                   </svg>
               </a>
           </div>
       </div>
   </div>
</div>


<!-- footer -->
<footer class="footer ">
    <div class="container-fluid">
        <div class="footer__head row g-0">
            <div class="col-lg-2">
                <a href="<?= $home->url; ?>" class="footer__logo" aria-label="universal">
                    <img src="<?= $base; ?>images/universal.svg" alt="" data-aos="fade-right" data-aos-delay="350" data-aos-duration="700">
                </a>
            </div>
            <div class="col-lg-3 col-6">
                <ul class="footer__menu">
                    <li  data-aos="fade-up" data-aos-delay="350" data-aos-duration="700">
                        <a href="<?= $pages->get(1021)->url; ?>"><?= $pages->get(1021)->title; ?></a>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="450" data-aos-duration="700">
                        <a href="<?= $pages->get(1048)->url; ?>"><?= $pages->get(1048)->title; ?></a>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="550" data-aos-duration="700">
                        <a href="<?= $pages->get(1049)->url; ?>"><?= $pages->get(1049)->title; ?></a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-3 col-6">
                <ul class="footer__menu">
                    <?php foreach ($pages->get(1060)->children as $it): ?>
                    <li data-aos="fade-up" data-aos-delay="350" data-aos-duration="700"><a href="<?= $it->url; ?>"><?= $it->title; ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div class="col-lg-4 col-6">
                <ul class="footer__menu">
                    <li data-aos="fade-up" data-aos-delay="350" data-aos-duration="700">
                        <a href="<?= $pages->get(1050)->url; ?>"><?= $pages->get(1050)->title; ?></a>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="450" data-aos-duration="700">
                        <a href="<?= $pages->get(1053)->url; ?>"><?= $pages->get(1053)->title; ?></a>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="550" data-aos-duration="700">
                        <a href="<?= $pages->get(1020)->url; ?>"><?= $pages->get(1020)->title; ?></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row footer__bottom g-0">
            <div class="col-lg-2 d-flex">
                <a href="javascript:void(0);" class="footer__lang" data-aos="fade-right" data-aos-delay="350" data-aos-duration="700"><?= $user->language->title; ?></a>

                <div class="footer__copy d-lg-none">
                    <span>© Universal group, <?= date('Y'); ?></span>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="footer__copy d-none d-lg-flex" data-aos="fade-right" data-aos-delay="350" data-aos-duration="700">
                    <span>© Universal group, <?= date('Y'); ?></span>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="footer__site-by"  data-aos="fade-left" data-aos-delay="350" data-aos-duration="700">
                    Site by
                    <a href="https://jis.az/" target="_blank" class="jis">
                        <img src="<?= $base; ?>images/svg-icons/jis.svg" alt="">
                        Jeykhun Imanov
                    </a>
                    Studio
                </div>
            </div>
            <div class="col-lg-4">
                <ul class="footer__social">
                    <?php foreach ($home->smm as $social): ?>
                    <li data-aos="fade-left" data-aos-delay="350" data-aos-duration="700">
                        <a href="<?= $social->txt1; ?>" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <use xlink:href="#svg-<?= $social->social->title; ?>"></use>
                            </svg>
                        </a>
                    </li>
                    <?php endforeach; ?>

                </ul>
            </div>
        </div>
    </div>
</footer>
<!-- end footer -->


<script src="<?= $base; ?>js/main.js?v=<?= time(); ?>"></script>
<script src="https://www.google.com/recaptcha/api.js?render=6LdJhvgfAAAAAJMwUVgEyMZ2RacUFOjx6nhNh8w1"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/v-mask/dist/v-mask.min.js"></script>
<script src="<?= $base; ?>js/vue.js?v=<?= time(); ?>"></script>

<script>
    if ($(window).width() >= 991){
        AOS.init({once: true});
    }
</script>
</body>
</html>