
// ===================================================
// ★swiper
// ===================================================
// new Swiper( '.swiper', {
//   speed: 400,
//   spaceBetween: 40,
//   width: 400,
//   loop: true,
//   loopedSlides: 6,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   breakpoints: {
//     768: {
//       spaceBetween: 24,
//       width: 274,
//     }
//   }
// });


const swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 20,
  loop: true,
  loopedSlides: 6,
  slidesPerView: 1,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {

  
  // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

// ===================================================
// ★wow
// ===================================================

new WOW().init();

// ===================================================
// ★drawer
// ===================================================


$(function() {  
  $('.drawer-icon').on('click',function(e){
    e.preventDefault();

    $('.drawer-icon').toggleClass('is-active');
    $('.drawer-content').toggleClass('is-active');
    $('.drawer-background').toggleClass('is-active');
    return false;

  })
  
});


// ===================================================
// ★スムーススクロール
// ===================================================

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  var speed = 500;
  // ヘッダーの高さを指定
  var header = jQuery('.header').innerHeight();
  // hrefで指定されたidを取得
  var id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする 
  var target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得(- headerでヘッダー分も上乗せしている)
  var position = jQuery(target).offset().top - header;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position 
   },
    speed);
  return false;
});



// ===================================================
// ★Topへ戻るをふわっと消す
// ===================================================


// スクロール検知
jQuery(window).on("scroll", function() {

  console.log(jQuery(this).scrollTop());

  // トップから100px以上スクロールしたら
  if (1000 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 jQuery('.to-top').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  jQuery('.to-top').removeClass( 'is-show' );
  }
});




// クリックした時のアクション
$(function() {
  $('.main-nav li a').on('click', function(){
    $('.main-nav li a').removeClass('is-active');
    $(this).addClass('is-active');
    return false;
  }) 
});

$(function () {

  // タイトルをクリックすると
  $(".accordion__item").on("click", function () {
    // クリックした次の要素を開閉
    $(this).next('.accordion__content').slideToggle(300);
    // タイトルにopenクラスを付け外しして矢印の向きを変更
    $(this).toggleClass("open", 300);
  });
});


$(function() {  
  $('.qa-box__q').on('click',function(){
    $(this).next().slideToggle();
    $(this).children('.qa-box__icon').toggleClass('is-open');
  })
});

// $(function() {  
//   $('.js-accordion-title').on('click',function(){
//     $(this).next().slideToggle(500);
//     $(this).toggleClass('open', 500);
//   })
// });



$(function() {  
  $('.js-close-button').on('click', function(e){
    // ↓aタグの場合無効化するの意味
    e.preventDefault();
    //data-以下が「target」になってる属性の値（target-modal）を取得
    var target = $(this).data('target');
    $(target).fadeOut();
    
  })

  $('.js-open-button').on('click', function(e){
    e.preventDefault();
    //data-(ハイフン)以下が「target」になってる属性の値（target-modal）を取得
    var target = $(this).data('target');
    $(target).fadeIn();
    
  })

});

// -------------🍔----------------

$(function() {
  $('.drawer').drawer()
})


// ========================
// google-formとcontact-formの紐付け
// ========================

$(function() { 
  let $form = $( '#js-form' ) 
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理
          $form.slideUp()
          $( '#js-error' ).slideDown() 
        }
      } 
    });
    return false; 
  }); 

  // formの入力確認
  let $submit = $( '#js-submit' )
  $( '#js-form input, #js-form textarea' ).on('change' , function(){
    if(
      $( '#js-form input[type="text"]' ).val() !== "" &&

      $( '#js-form input[type="checkbox"]' ).prop( 'checked' ) === true
    ) {
      // 全て入力された時(クリックできる状態)
      $submit.prop( 'disabled', false )
      $submit.addClass( '-active' )
    } else {
      // 入力されていない時（クリックできる状態）
      $submit.prop( 'disabled', true )
      $submit.removeClass( '-active' )
    }
  })
})



