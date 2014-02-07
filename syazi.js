$(function(){
  var message = {
    teacher: [
      "本研究を進めるにあたり、ご指導を頂いた卒業論文指導教員の%sに感謝致します。",
      "%s、本当にありがとうございました。",
      "マジサンキュー%s！"
    ],
    adviser: [
      "また、日常の議論を通じて多くの知識や示唆を頂いた%sに感謝します。",
      "%sも大変お世話になりました。",
      "%sもありがとな！"
    ],
    helper: [
      "また、実験の際に被験者を快く引き受けてくださり、そして多くのご指摘を下さいました%sに感謝いたします。",
      "また、%sもご協力ありがとうございました。",
      "%sマジ助かったぜ！"
    ]
  };

$("form").submit(function(){
  var yuru = $("#yuru").val();
  if($("#teacher").val()){
    var teacher = $("#teacher").val();
    var syazi = sprintf(message.teacher[yuru], teacher);
    if($("#adviser").val()){
      var adviser = $("#adviser").val();
      syazi += sprintf(message.adviser[yuru], adviser);
    }
    if($("#helper").val()){
      var helper = $("#helper").val();
      syazi += sprintf(message.helper[yuru], helper);
    }
    $("#result").show();
    $("#result p").text(syazi);
  }
  else {
    alert("大事な人を忘れてないか？");
  }

  return false;
  });

  $("#yuru").slider({ value: 0 });

});
