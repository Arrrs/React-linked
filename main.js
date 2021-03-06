function App() {
    let dishes = [
        {
        des: {
            name: "Куриный суп с вермишелью",
            value: "6 порций по 240 ККал",
            time: "45 мин (ваши 20 мин)",
            descr: "Куриный суп с вермишелью - первое блюдо, которое с удовольствием съедят и дети, и взрослые. Рецепт супа из куриного филе очень прост.",
            src: "./images/F_0.jpg",
        },
        ing: {
            "Филе куриное": "2 шт. (500 г)",
            "Картофель": "2-3 шт.",
            "Морковь": "1 шт.",
            "Лук репчатый": "1 шт.",
            "Вермишель": "100 г",
            "Зелень петрушки (для подачи)": "по вкусу",
            "Лист лавровый": "2 шт.",
            "Перец черный молотый": "2 щепотки (по вкусу)",
            "Соль": "3 щепотки (по вкусу)",
            "Масло растительное": "2 ст. л.",
            "Вода": "2 л.",
        },
        step: {
            "./images/F_1.jpg": "Подготовьте необходимые продукты для куриного супа с вермишелью. Овощи очистите, вымойте.",
            "./images/F_2.jpg": "Как приготовить куриный суп с вермишелью: куриное филе вымойте, обсушите, срежьте с филе пленки и нарежьте его крупно.",
            "./images/F_3.jpg": "Выложите курицу в кастрюлю, залейте холодной водой, добавьте лавровые листья. Доведите до кипения и снимите пену. Варите куриное филе 15 минут, после чего выложите кусочки филе на тарелку.",
            "./images/F_4.jpg": "Морковь натрите на крупной терке.",
            "./images/F_5.jpg": "Лук нарежьте мелкими кубиками.",
            "./images/F_6.jpg": "Разогрейте на сковороде растительное масло и обжарьте на умеренном огне (спассеруйте) нарезанный лук примерно 2-3 минуты, до мягкости.",
            "./images/F_7.jpg": "Добавьте к луку натертую морковь, перемешайте и обжаривайте лук и морковь еще 2 минуты.",
            "./images/F_8.jpg": "Картофель нарежьте средними кубиками или брусочками.",
            "./images/F_9.jpg": "Куриное филе нарежьте кусочками.",
            "./images/F_10.jpg": "Добавьте в кастрюлю с бульоном картофель и варите примерно 10 минут.",
            "./images/F_11.jpg": "После этого добавьте приготовленную зажарку (пассеровку).",
            "./images/F_12.jpg": "В суп с овощами добавьте куриное филе.",
            "./images/F_13.jpg": "Всыпьте в суп с курицей вермишель, добавьте соль и молотый перец по вкусу. Перемешайте. Варите куриный суп с вермишелью 5-7 минут. (При желании можно добавить в суп измельченную зелень петрушки.)",
            "./images/F_14.jpg": "Готовому куриному супу дайте настояться несколько минут. Затем разлейте суп с вермишелью по тарелкам, посыпьте измельчённой свежей зеленью и подавайте к столу. Приятного аппетита!",
        }
        },
        {
        des: {
            name: "Сырный суп с шампиньонами",
            value: "6 порций по 330 ККал",
            time: "40-50 минут",
            descr: "Сырный суп с шампиньонами достаточно быстро готовится и получается очень сытным и вкусным. Насыщенный сырно-сливочный вкус и аппетитный грибной аромат с нотками свежего укропа делают это первое блюдо просто великолепным. Попробуйте!",
            src: "./images/G_0.jpg",
        },
        ing: {
            "Шампиньоны": "500 г",
            "Сыр плавленый": "180-200 г (2 шт.)",
            "Сметана": "100 г",
            "Картофель": "1 шт.",
            "Лук репчатый": "120 г",
            "Морковь ": "100 г",
            "Масло сливочное": "20 г",
            "Масло растительное": "15 г (1 ст. ложка)",
            "Соль": "по вкусу",
            "Перец чёрный молотый": "по вкусу",
            "Укроп свежий": "20 г",
            "Вода": "2 л.",
        },
        step: {
            "./images/G_1.jpg": "Необходимые продукты.",
            "./images/G_2.jpg": "Картофель очищаем, нарезаем кусочками среднего размера и заливаем в кастрюле небольшим количеством воды. Отвариваем около 15 минут до полной готовности.",
            "./images/G_3.jpg": "Грибы обтираем влажным кухонным полотенцем и нарезаем пластинками.",
            "./images/G_4.jpg": "Разогреваем сухую сковороду и обжариваем грибы на среднем огне около 7-10 минут, до уменьшения их в размере и испарения лишней жидкости.",
            "./images/G_5.jpg": "Картофель освобождаем от жидкости и разминаем в пюре (слегка, без фанатизма).",
            "./images/G_6.jpg": "Лук и морковь очищаем. Лук нарезаем небольшими кубиками, морковь натираем на средней терке.",
            "./images/G_7.jpg": "Плавленые сырки натираем на крупной или средней терке.",
            "./images/G_8.jpg": "В кастрюле с толстым дном растапливаем сливочное масло и добавляем растительное масло. Обжариваем лук с морковью 3-5 минут до мягкости и легкой золотистости.",
            "./images/G_9.jpg": "Затем в кастрюлю с луком и морковью добавляем толченый картофель и грибы.",
            "./images/G_10.jpg": "Заливаем содержимое кастрюли водой, добавляем немного соли и черный молотый перец.",
            "./images/G_11.jpg": "Варим все 10 минут.",
            "./images/G_12.jpg": "Затем добавляем плавленый сыр, интенсивно размешиваем (чтобы сыр лучше растворился) и варим суп еще 3 минуты.",
            "./images/G_13.jpg": "Затем добавляем сметану.",
            "./images/G_14.jpg": "Укроп промываем, мелко нарезаем и добавляем в кастрюлю (немного укропа можно оставить для подачи блюда). Доводим суп до кипения, добавляем соль по вкусу и выключаем огонь.",
            "./images/G_15.jpg": "Сырный суп с шампиньонами разливаем по тарелкам, каждую порцию посыпаем оставшимся укропом и подаем к столу. Приятного аппетита!"
        }
        },
        {
        des: {
            name: "Суп с фрикадельками и вермишелью",
            value: "8 порций по 290 ККал",
            time: "45 минут",
            descr: "Сегодня у меня на обед суп с куриными фрикадельками и вермишелью. Готовится очень быстро и легко, возьмите простой рецепт на заметку.",
            src: "./images/H_0.jpg",
        },
        ing: {
            "Куриное филе или куриный фарш": "400 г",
            "Картофель": "3-4 шт.",
            "Морковь": "1 шт.",
            "Лукрепчатый": "1 шт.",
            "Вермишель": "80 г",
            "Масло растительное": "2 ст. ложки",
            "Соль ": "по вкусу",
            "Перец молотый": "по вкусу",
            "Лавровый лист": "1 шт.",
            "Зелень свежая (укроп, петрушка)": "по вкусу",
            "Вода": "2,5 л.",
        },
        step: {
            "./images/H_1.jpg":  "Подготовить продукты для супа с фрикадельками. Куриное филе порезать на кусочки и пропустить через мясорубку. Или использовать готовый куриный фарш.",
            "./images/H_2.jpg":  "Фарш посолить и поперчить. Хорошо перемешать и отбить, бросая в миску несколько раз. Сформировать из фарша мокрыми руками фрикадельки.",
            "./images/H_3.jpg":  "Вскипятить воду. Посолить. В кипящую воду выложить фрикадельки.",
            "./images/H_4.jpg":  "Картофель очистить и нарезать небольшим кубиком (произвольными кусочками).",
            "./images/H_5.jpg":  "К фрикаделькам добавить картофель. Варить на среднем огне 10 минут.",
            "./images/H_6.jpg":  "Лук очистить и мелко нарезать.",
            "./images/H_7.jpg":  "Морковь очистить и натереть на крупной терке.",
            "./images/H_8.jpg":  "Разогреть сковороду, налить растительное масло. В разогретое масло выложить лук и морковь. Обжарить на умеренном огне (пассеровать), помешивая, 4-5 минут, до мягкости.",
            "./images/H_9.jpg":  "В кастрюлю с супом добавить зажарку (пассеровку), перец и лавровый лист. Варить 5-7 минут.",
            "./images/H_10.jpg": "Добавить в суп с фрикадельками и овощами вермишель. Варить суп с вермишелью 3-5 минут.Зелень мелко нарезать и добавить в суп. Снять кастрюлю с огня и дать супу настояться 10 минут.",
            "./images/H_11.jpg": "Суп с фрикадельками и вермишелью готов. Приятного аппетита!"
        }
        }
    ];
    let [clicks, setClicks] = React.useState(0);

    console.log(clicks);
    console.log(setClicks);
    return (
        <div className="mainCont">
            <div className="counter"><h3>{clicks + 1} из {dishes.length}</h3></div>
            <div>
                <Descr des={dishes[clicks].des} />
            </div>
            <div>
                <Products ing={dishes[clicks].ing} />
            </div>
            <div>
                <Cooking step={dishes[clicks].step} />
            </div>
            <div className="left teg" onClick={() => setClicks(clicks > 0 ? clicks - 1 : clicks)}><img src="images/z.png" alt="" /></div>
            <div className="right teg" onClick={() => setClicks(clicks < dishes.length - 1 ? clicks + 1 : clicks)}><img src="images/z.png" alt="" /></div>
        </div>
    );
}

function Descr({ des }) {
    return (
        <div className="block_1">
            <h1 className="name">{des.name}</h1>
            <img className="mainImg" src={des.src} alt="" />
            <div className="block_1--sub">
                <h5>{des.value}</h5>
                <h5>{des.time}</h5>
                <p>{des.descr}</p>
            </div>
        </div>
    );
}

function Products({ ing }) {
    let arr = [];
    for (var i in ing) {
        arr.push(i + " - " + ing[i]);
    }
    return  <div className="block_2">
                <h3>Продукты</h3>
                <ul className="ing">{arr.map((e) => (<li>{e}</li> ))}</ul>
            </div>
      
}

function Cooking({ step }) {
    let arr = [];
    arr.push (
        <h3 className="block_3--h3">Пошаговый фото рецепт</h3>
    );
    for (var i in step) {
        arr.push(   <div className="block_3">
                        <img src={i} alt="" />
                        <p>{step[i]}</p>
                    </div>);
    }
    return arr;
}

ReactDOM.render(<App />, document.getElementById("app"));
