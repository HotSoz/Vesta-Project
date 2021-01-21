$(document).ready(
  //Navigation
  function () {
    var tbs = $(".tab");
    tbscon = $(".tab-container");

    tbs.addClass("inactive");
    tbs.first().removeClass("inactive");
    tbscon.hide();
    tbscon.first().fadeIn();

    tbs.click(function () {
      var t = $(this).attr("id");

      if ($(this).hasClass("inactive")) {
        tbs.addClass("inactive");
        $(this).removeClass("inactive");

        tbscon.hide();
        $("#" + t + "container").fadeIn(500);
      }
    });

    //Drag and Drop
    let dragging;

    $(".item").mousedown(function () {
      dragging = $(this).detach();
      dragging.appendTo(".dragging-area");
    });

    $(".drop-area").mousedown(function () {
      $(this).addClass("redrop");
    });

    $(".drop-area").mouseup(function () {
      dragging.appendTo($(this));
      dragging = null;
    });

    $(document).mouseup(function () {
      dragging = $(".dragging-area").children().detach();
      dragging.appendTo(".redrop");
      dragging = null;
      $(".drop-area").removeClass("redrop");
    });

    $(document).mousemove(function (e) {
      let x = e.pageX;
      y = e.pageY;

      $(".dragging-area").css({ left: x, top: y });
    });

    // Comment Section
    var scrlHeight = $(".txtcom").height();

    $(".txtcom").keyup(function () {
      $(this).css("height", "");
      scrlHeight = $(this).prop("scrollHeight");
      $(this).css("height", scrlHeight + "px");
      // oninput='this.style.height = ""; this.style.height = this.scrollHeight + "px"'
    });

    $('.like').click(
        function() {
        // console.log(typeof $('.like').html())
            let likeButton = $('.like');
            let likes = $('.likeCount').text();
            let likeNum = parseInt(likes);
            if ($(likeButton).hasClass('liked')) {
                likeNum--;
                $('.like').removeClass('liked');
                $('.like').addClass('unliked');
                $('.likeCount').html(likeNum);
                return
            };

            if ($(likeButton).hasClass('unliked')) {
                likeNum++;
                $('.like').removeClass('unliked');
                $('.like').addClass('liked');
            };
            $('.likeCount').html(likeNum);
        }
    )
  }
);

// Comment section
function updateCom() {
  var x = $("#commentTxt").val();
  //$('#comments').first().clone().appendTo('#commentDiv').html();
  $("#commentDiv").append(
    "<div id='comments'><img alt='PFP' src='Images/m2.png'><div class='gridby22'><p>Name N.</p><p class='commentPar'>" +
      x +
      "</p></div><div class='like'><i class='far fa-heart'></i></div></div>"
  );
  $("#commentTxt").val("");
  $(".txtcom").css("height", "");
}


const btn = document.querySelector('button'); 
function random(number) { 
return Math.floor(Math.random() * (number+1)); 
} 
btn.onclick = function() { 
const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'; 
document.body.style.backgroundColor = rndCol; 
}
