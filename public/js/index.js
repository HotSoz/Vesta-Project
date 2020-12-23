       $(document).ready(
            function(){
                
                var tbs = $('.tab');
                    tbscon = $('.tab-container');
                
                tbs.addClass('inactive');
                tbs.first().removeClass('inactive');
                tbscon.hide();
                tbscon.first().fadeIn();
                
                tbs.click(
                    function(){
                        var t = $(this).attr("id")
                        
                        if ($(this).hasClass('inactive')){
                            tbs.addClass('inactive');
                            $(this).removeClass('inactive');
                            
                            tbscon.hide();
                            $('#' + t + 'container').fadeIn(500);
                        }
                    }
                )
                // $('.item').draggable(){
                //     function();
                // }
                let dragging;

                $('.item').mousedown(
                    function(){
                    dragging = $(this).detach();
                    dragging.appendTo('.dragging-area');
                    }
                    );

                $('.drop-area').mousedown(
                    function(){
                        $(this).addClass('redrop');
                    }
                )

                $('.drop-area').mouseup(
                    function(){
                        dragging.appendTo($(this));
                        dragging = null;
                    }
                    );

                $(document).mouseup(
                    function(){
                        dragging = $('.dragging-area').children().detach();
                        dragging.appendTo('.redrop')
                        dragging = null;
                        $('.drop-area').removeClass('redrop');
                    }
                );
                
                $(document).mousemove(
                    function(e){
                        let x = e.pageX;
                            y = e.pageY;

                        $('.dragging-area').css({'left':x, 'top':y})
                    }
                )
            }
            );
        
            function updateCom(){
                var x = $('#commentTxt').val();
                //$('#comments').first().clone().appendTo('#commentDiv').html();
                $('#commentDiv').append("<div id='comments'><img alt='PFP' src='Images/m2.png'><div class='gridby22'><p>Name N.</p><p class='commentPar'>" + x + "</p></div></div>");
                
            }
