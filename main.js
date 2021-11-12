jQuery(function($){

    //По стандарту выбираем первый элемент при загрузке страницы
    $('li:nth-child(1)').addClass('li_click');
    $('label[for=rad_1]').addClass('label_on');
    $('li:nth-child(1) input').attr('checked', 'checked');

    $('body').on('click', 'li', function(e) {
        
        //Обнуление всех элементов
        $('input').removeAttr('checked');
        $('label').removeClass('label_on');
        $('li').removeClass('li_click');

        $(e.currentTarget).addClass('li_click');//Регистрируем элементна который кликнули

        let now = $(e.currentTarget).find('label');//Ищем label для установки радиокнопки
        $(now).addClass('label_on');//Устанавливаем радиокнопку

        let inp = $(e.currentTarget).find('input');//Ищем input

        $(inp).attr('checked', 'checked');//ставим атрибут cheked

        num();//отображение выбранного плана

        summ();//подсчет суммы
        
    });

    $('option').click(function(){//подсчет суммы при выборе кол-ва
        summ();
    });

    function summ(){
        let inp = $('ul li').find('input:checked');//Находим нужный элемент
        inp = $(inp).parent();//Возвращаемся к родителю
        let price = $(inp).find('span').text();//находим цену
        
        let kol = $('select option:selected').text();//берём кол-во
        let summ = price * kol;//цена * кол(стоимость)

        $('#price').text(summ)//выводим стоимость
    }
    summ();

    function num(){

        let inp = $('ul li').find('input:checked');//Находим нужный элемент
        let i = inp.attr('id');//берём его ID
        i = i.substring(i.length - 1);//берём последний символ, так как ID показывает номер элемента 

        $('.selected_plan span').text(i);//Выводим выбранный план
        
    }
    num();



})