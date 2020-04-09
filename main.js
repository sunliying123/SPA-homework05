$(function(){
    var $box2=$('#box2'),
        $font=$('#font'),
        $fontbox=$('div[id="fontbox"]'),
        $remove=$('#remove'),
        $example=$('#example');
    
    var html=''
        +'<div id="fontbox">'
            +'<div id="top">'
                +'<span style="float:left;margin-left:8px;margin-top: 3%;">字体</span>'
                +'<span id="remove" style="float:right;margin-right:10px;margin-top: 3%;">X</span>'
            +'</div>'
            +'<form action="" method="GET">'
                +'<p style="font-size: 13px;float: left;margin-left: 20px;">字体(F):</p>'
                +'<select style="float: left;margin-top: 40px;margin-left: -45px;" name="">'
                    +'<option style="font-family: Agency FB;">Agency FB</option>'
                    +'<option style="font-family: Algerian;">Algerian</option>'
                    +'<option style="font-family: Arial;">Arial</option>'
                    +'<option style="font-family: Arial Rounded MT;">Arial Rounded MT</option>'
                    +'<option style="font-family: Axure Handwriting;">Axure Handwriting</option>'
                    +'<option style="font-family: Bahnschrift;">Bahnschrift</option>'
                    +'<option style="font-family: Baskerville Old Face;">Baskerville Old Face</option>'
                    +'<option style="font-family: Bauhaus 93;">Bauhaus 93</option>'
                    +'<option style="font-family: Bell MT;">Bell MT</option>'
                    +'<option style="font-family: Berlin Sans FB;">Berlin Sans FB</option>'
                    +'<option style="font-family: Bernard MT;">Bernard MT</option>'
                    +'<option style="font-family: BlackAdder ITC;">BlackAdder ITC</option>'
                +'</select>'

                +'<p style="font-size: 13px;float:left;margin-left: 30px;">字形(Y):</p>'
                +'<select style="float: left;margin-top: 40px;margin-left: -45px;">'
                    +'<option>常规</option>'
                    +'<option style="font-style: italic;">斜体</option>'
                    +'<option style="font-weight: bold;">粗体</option>'
                    +'<option style="font-weight: bold;font-style: italic;">粗偏斜体</option>'
                +'</select>'

                +'<p style="font-size: 13px;float:left;margin-left: 30px;">大小(S):</p>'
                +'<select style="float: left;margin-top: 40px;margin-left: -45px;">'
                    +'<option>2</option>'
                    +'<option>4</option>'
                    +'<option>6</option>'
                    +'<option>8</option>'
                    +'<option>10</option>'
                    +'<option>12</option>'
                    +'<option>14</option>'
                    +'<option>16</option>'
                    +'<option>18</option>'
                    +'<option>20</option>'
                +'</select>'

                +'<fieldset style="width: 100px;height: 80px;float: left;margin-left: 20px;margin-top: 30%;">'
                    +'<legend style="font-size: 12px;">示例</legend>'
                    +'<p id="example">AaBbYyZz</p>'
                +'</fieldset>'

                +'<p style="font-size: 13px;float:left;margin-top: 230px;margin-left: -130px;">脚本(R):</p>'
                +'<select style="float: left;margin-top: 250px;margin-left: -130px;">'
                    +'<option>西欧语言</option>'
                    +'<option>中文 GB2312</option>'
                +'</select>'
            +'</form>'
            +'<input id="sure" type="button" value="确定" />'
            +'<input id="cancel" type="button" value="取消" />'
        +'</div>';

    //点击字体弹出对话框
    $font.click(function(){
        $box2.html(html);
    });
    
    //点击右上角X,对话框消失
    $remove.click(function(){
        $fontbox.style.display='none';
    })

});