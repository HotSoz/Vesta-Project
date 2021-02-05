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

    $(document).on('click', '.like', function() {
      let currentVal = $(this).children().last().html();
      let siblingVal = $(this).siblings().first().children().last().html();
      if ($(this).siblings().first().hasClass("checked")) {
        currentVal = Number(currentVal) + 1;
        $(this).children().last().html(currentVal);
        siblingVal = Number(siblingVal) - 1;
        $(this).siblings().first().children().last().html(siblingVal);
        $(this).siblings().first().removeClass('checked');
        $(this).addClass('checked');
      } else if ($(this).hasClass('checked')) {
        currentVal = Number(currentVal) - 1;
        $(this).children().last().html(currentVal);
        $(this).removeClass('checked');             
      } else {
        $(this).addClass('checked');
        currentVal = Number(currentVal) + 1;
        $(this).children().last().html(currentVal);        
      }
    });

    $(document).on('click', '.dislike', function() {
      let currentVal = $(this).children().last().html();
      let siblingVal = $(this).siblings().first().children().last().html();
      if ($(this).siblings().first().hasClass("checked")) {
        currentVal = Number(currentVal) + 1;
        $(this).children().last().html(currentVal);
        siblingVal = Number(siblingVal) - 1;
        $(this).siblings().first().children().last().html(siblingVal);
        $(this).siblings().first().removeClass('checked');
        $(this).addClass('checked');
      } else if ($(this).hasClass('checked')) {
        currentVal = Number(currentVal) - 1;
        $(this).children().last().html(currentVal);
        $(this).removeClass('checked');             
      } else {
        $(this).addClass('checked');
        currentVal = Number(currentVal) + 1;
        $(this).children().last().html(currentVal);        
      }
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
