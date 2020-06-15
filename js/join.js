$("#content").keyup(function(){
    let len = $(this).val().length;
    let $counter = $("#counter")
    $counter.html(len);

    if(len > 30)
      $counter.css("color", "red");
    else
      $counter.css("color", "white");

  });

  
  $("form").submit(function(e){
    let len = $("#content").val().length;
    let k = $("#userId").val();
    let v = $("#pwd").val();

    if(len == 0 || len > 30){
      
      e.preventDefault();
    }
    if(k == '' || v == ''){
      alert("빈칸 없이 입력해주세요");
      return false;
    }
    
    localStorage.setItem(k, v);

    return true;

  //   location.href='index.html'

  });
  