<?php namespace ProcessWire; ?>
<div class="apply" data-appoint="send_vacancy">
    <div class="row g-0">
        <div class="col-md-9" data-aos="fade-right" data-aos-delay="250" data-aos-duration="700">
            <div id="app" class="container-fluid">
                <div class="apply__head">
                    <h2 class="apply__title"><?= _x('Become part of our team','-'); ?></h2>
                    <?= $pages->get(1049)->sidebar; ?>
                </div>
                <form @submit.prevent="checkForm" action="" v-if="!savingSuccessful" method="post">
                    <div class="row g-0">
                        <input type="hidden" name="action" value="career">
                        <input type="hidden" name="item" value="<?= $page->id; ?>">
                        <?php $form_inputs=['name'=>_x('Name','-'),'surname'=>_x('Surname','-'),'phone'=>_x('Phone','-'),'email'=>_x('Email','-')]; ?>
                        <?php foreach ($form_inputs as $k=>$it): ?>
                        <div class="col-md-6">
                            <div class="form-group form-floating">
                                <input type="text" class="form-control"
                                       name="<?= $k; ?>"
                                       id="<?= $k; ?>"
                                       :class="{ alert: !<?= $k; ?> && errors.length }"
                                       <?= ($k=='phone') ? 'v-mask="\'+994 ## ### ## ##\'"' : ''; ?>
                                       v-model="<?= $k; ?>"
                                       placeholder="<?= $it; ?>"
                                       >
                                <label for=""><?= $it; ?></label>
                            </div>
                        </div>
                        <?php endforeach; ?>

                        <div class="col-md-12 text-end">
                            <div class="form-group form-group--file">
                                <input type="file" name="file" @change="handleFileUpload( $event )" id="file" class="d-none">
                                <label for="file" style="flex-direction:column;"
                                       :class="{ alert: !file_url && errors.length }">
                                    <div>
                                        <img src="<?= $base; ?>images/svg-icons/file.svg" alt="">
                                        <span>{{ file.name ? file.name : '<?= _x('Attach your CV','-'); ?>' }}</span>
                                    </div>
                                    <p style="text-align: center;color:#ff0000;">{{ file.size>2000000 ? '<?= _x('File size more than 2mb','-') ?>' : '' }}</p>
                                    <p style="text-align: center;">{{ file.name ? uploadPercentage+'%' : '' }}</p>
                                </label>
                            </div>
                            <button type="submit" style="border:none;" class="btn btn-medium w-100">
                                <?= _x('Send resume','-'); ?>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <use xlink:href="#svg-arrow-right2"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
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
        <div class="col-md-3" data-aos="fade-left" data-aos-delay="250" data-aos-duration="700">
            <div class="apply__pattern">
                <img src="<?= $base; ?>images/apply-pattern.svg" alt="">
            </div>
        </div>
    </div>
</div>