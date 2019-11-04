
<template>
  <div class="wrap">
    <h2>
      Приложение для расчета фин. результата при общей системе налогообложения.
      <br />Фирма не является плательщиком налога на добавленную стоимость.
    </h2>
    <div class="text">
      <form @submit="submit" class="form">
        Приобретено
        <input type="number" min="1" v-model="purchaseQuantity" required /> ед. товара по цене
        <input type="number" min="1" v-model="purchasePrice" required /> грн./шт.
        <br />
        За отчетный период было продано
        <input type="number" min="0" v-model="saleQuantity" required /> ед. товара с торговой наценкой
        <input type="number" min="1" v-model="tradeMargin" required /> %.
        <br />
        Бонус менеджера составляет
        <input type="number" min="1" max="20" v-model="managerBonus" required /> % от продаж.
        <br />Постоянные затраты:
        <br />- фонд оплаты труда административно-управленческого персонала - 5000 грн.,
        <br />- прочие затраты - 2000 грн.
        <br />
        <input type="submit" value="Расчитать" class="submit" /> финансовый результат.
      </form>
    </div>
    <div class="report">
      <table>
        <tr>
          <th rowspan="2"></th>
          <th colspan="2">Обороты за период</th>
        </tr>
        <tr>
          <td>Дт</td>
          <td>Кт</td>
        </tr>
        <tr>
          <td>281 (Товар)</td>
          <td class="dt281"></td>
          <td class="kt281"></td>
        </tr>
        <tr>
          <td>361 (Взаиморасчеты с покупателями)</td>
          <td class="dt361"></td>
          <td></td>
        </tr>
        <tr>
          <td>631 (Взаиморасчеты с поставщиками)</td>
          <td></td>
          <td class="kt631"></td>
        </tr>
        <tr>
          <td>661 (Зарплата)</td>
          <td></td>
          <td class="kt661"></td>
        </tr>
        <tr>
          <td>6411 (Подоходный налог)</td>
          <td></td>
          <td class="kt6411"></td>
        </tr>
        <tr>
          <td>651 (Пенсинный фонд)</td>
          <td></td>
          <td class="kt651"></td>
        </tr>
        <tr>
          <td>642 (Военный сбор)</td>
          <td></td>
          <td class="kt642"></td>
        </tr>
        <tr>
          <td>6413 (Налог на прибыль)</td>
          <td></td>
          <td class="kt6413"></td>
        </tr>
        <tr>
          <td>702 (Доход)</td>
          <td></td>
          <td class="kt702"></td>
        </tr>
        <tr>
          <td>902 (Затраты)</td>
          <td class="dt902"></td>
          <td></td>
        </tr>
        <tr>
          <td>Финансовый результат (нераспределенная прибыль, непокрытый убыток)</td>
          <td colspan="2" class="result"></td>
        </tr>
      </table>
    </div>
    <p>Во избежании проблем с налоговой службой, не рекомендуется использовать данное приложение в реальной жизни )))</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    purchasePrice: "",
    purchaseQuantity: "",
    tradeMargin: "",
    saleQuantity: "",
    managerBonus: ""
  }),

  methods: {
    submit(event) {
      event.preventDefault();

      let dt281 = (document.querySelector(".dt281").innerText = Math.round(
        this.purchasePrice * this.purchaseQuantity
      ));
      document.querySelector(".kt631").innerText = Math.round(dt281 * 1.2);

      let kt281 = (document.querySelector(".kt281").innerText = Math.round(
        this.purchasePrice * this.saleQuantity
      ));
      let kt702 = (document.querySelector(".kt702").innerText = Math.round(
        kt281 + (kt281 * this.tradeMargin) / 100
      ));
      document.querySelector(".dt361").innerText = Math.round(kt702 * 1.2);

      let bonus =
        (document.querySelector(".kt702").innerText * this.managerBonus) / 100;
      let kt6411 = (document.querySelector(".kt6411").innerText = Math.round(
        (bonus + 5000) * 0.18
      ));
      let kt642 = (document.querySelector(".kt642").innerText = Math.round(
        (bonus + 5000) * 0.015
      ));
      let kt651 = (document.querySelector(".kt651").innerText = Math.round(
        (bonus + 5000) * 0.22
      ));
      let kt661 = (document.querySelector(".kt661").innerText = Math.round(
        bonus + 5000 - kt6411 - kt642
      ));

      let dt902 = (document.querySelector(".dt902").innerText = Math.round(
        kt281 + kt6411 + kt642 + kt661 + kt651 + 2000
      ));

      let kt6413 = (document.querySelector(".kt6413").innerText = Math.round(
        (kt702 - dt902) * 0.18
      ));

      document.querySelector(".result").innerText = Math.round(
        kt702 - dt902 - kt6413
      );

      this.purchaseQuantity = '';
      this.purchasePrice = '';
      this.tradeMargin = '';
      this.saleQuantity = '';
      this.managerBonus = '';

    }
  }
};
</script>

<style scoped>
.wrap {
  background: #ecd5ea;
  color: #270128;
  font-family: Pomidorco;
  font-size: 16px;
}
h2 {
  line-height: 1.5em;
}
.text {
  padding: 20px;
  font-size: 20px;
  line-height: 3em;
}
.report {
  padding: 20px;
}
table {
  border: 2px solid #a987a8;
  width: 100%;
  background: #693b69;
  color: #fff;
}
th,
td,
tr {
  border: 2px solid #a987a8;
  text-align: center;
  line-height: 2em;
}
input {
  border: 2px solid #a987a8;
  margin-bottom: 5px;
  margin-top: 5px;
  line-height: 2em;
  width: 120px;
  border-top: none;
  border-left: none;
  border-right: none;
  background: #ecd5ea;
  font-family: Pomidorco;
  font-size: 20px;
  text-align: center;
  outline: none;
}
.submit {
  width: 100px;
  border: none;
  cursor: pointer;
}
</style>