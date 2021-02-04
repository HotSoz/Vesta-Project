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

    //New Like and Dislike
    // Buttons for Like and Dislike
    // let litLike = $(".checkLike");
    // let ditLike = $(".checkDislike");
    // let disPoint = $(".dislike");
    // let dislikes = $(".dislikeCount").text();
    // let dislikeNum = parseInt(dislikes);
    // let likePoint = $(".like");
    // // let likes = $(".likeCount").text();
    // // let likeNum = parseInt(likes);
    // // Like Button
    // $(".like").click(function () {

    //   let likeElement = $(this).children().last().html();
    //   console.log(likeElement);
    //   let likes = (likeElement);
    //   let likeNum = parseInt(likes)

    //   if (ditLike.hasClass("checked" && "disliked")) {
    //     ditLike.removeClass("checked");
    //     litLike.addClass("checked");
    //     $(".dislike").removeClass("disliked");
    //     $(".dislike").addClass("undisliked");
    //     dislikeNum--;
    //     $(".dislikeCount").html(dislikeNum);
    //   } else {
    //     litLike.addClass("checked");
    //   }

    //   if ($(likePoint).hasClass("liked")) {
    //     likeNum--;
    //     ditLike.removeClass("checked");
    //     $(".like").removeClass("liked");
    //     $(".like").addClass("unliked");
    //     $(".likeCount").html(likeNum);
    //     return;
    //   }

    //   if ($(likePoint).hasClass("unliked")) {
    //     likeNum++;
    //     litLike.addClass("checked");
    //     $(".like").removeClass("unliked");
    //     $(".like").addClass("liked");
    //   }

    //   $('.likeCount').html(likeNum);
    // });

    // // Dislike Button
    // $(".dislike").click(function () {
      
      

    //   if ($(litLike).hasClass("checked" && "liked")) {
    //     $(".like").removeClass("liked");
    //     $(".like").addClass("unliked");
    //     likeNum--;
    //     $(".likeCount").html(likeNum);
    //   } else {
    //     ditLike.addClass("checked");
    //   }
      

    //   if ($(disPoint).hasClass("disliked")) {
    //     dislikeNum--;
    //     litLike.removeClass("checked");
    //     $(".dislike").removeClass("disliked");
    //     $(".dislike").addClass("undisliked");
    //     $(".dislikeCount").html(dislikeNum);
    //     return;
    //   }

    //   if ($(disPoint).hasClass("undisliked")) {
    //     dislikeNum++;
    //     ditLike.addClass("checked");
    //     $(".dislike").removeClass("undisliked");
    //     $(".dislike").addClass("disliked");
    //   }
    //   $(".dislikeCount").html(dislikeNum);
    // });
    $('.like').click(function () {

      let likeNum = $(this).children().last().html();
      let thisPoint = $(this)
      let likePoint = parseInt(likeNum);
    
      if ($(this).hasClass('unliked')) {
        $(thisPoint).removeClass('unliked');
        $(thisPoint).addClass('liked');
        likePoint++;
        $(likeNum).html(likePoint);
        console.log(likeNum)
        return;
      }
    
      if ($(this).hasClass('liked')) {
        $(thisPoint).removeClass('liked');
        $(thisPoint).addClass('unliked');
        likePoint--;
      }

      $(likeNum).html(likePoint);
    });
  }
);

// Comment section
function updateCom() {
  let y = 
  `
  <div class="likeButton">
  <div class="like unliked checkLike">
      <i class='far fa-heart'></i>
      <p class="likeCount">0</p>
  </div>
  <div class="dislike undisliked checkDislike">
      <i class="fas fa-heart-broken"></i>
      <p class="dislikeCount">0</p>
  </div>
</div>
`
  var x = $("#commentTxt").val();
  //$('#comments').first().clone().appendTo('#commentDiv').html();
  $("#commentDiv").append(
    `
    <div id='comments'>
    <img alt='PFP' src='Images/m2.png'>
    <div class='gridby22'><p>Name N.</p>
    <p class='commentPar'>` + x +
    `</p>` + y);
  $("#commentTxt").val("");
  $(".txtcom").css("height", "");
}
