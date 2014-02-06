$(function(){
  $("form").submit(function(){
    if($("#teacher").val()){
      var teacher = $("#teacher").val();
      var syazi = "本研究を進めるにあたり、ご指導を頂いた卒業論文指導教員の"+teacher+"に感謝致します。" ;
      if($("#adviser").val()){
        var adviser = $("#adviser").val();
        syazi += "また、日常の議論を通じて多くの知識や示唆を頂いた"+adviser+"に感謝します。";
      }
      if($("#helper").val()){
        var helper = $("#helper").val();
        syazi += "また、実験の際に被験者を快く引き受けてくださり、そして多くのご指摘を下さいました"+helper+"に感謝いたします。"
      }
      $("#result").show();
      $("#result p").text(syazi);
    }
    else{
      alert("大事な人を忘れてないか？");
    }
  return false;
  });
});
