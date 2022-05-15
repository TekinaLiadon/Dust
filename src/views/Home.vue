<template>
  <Layout>
    <div class="home__header">
      <img src="../assets/images/home-hedear.png" class="home__header__img" />
    </div>
    <div class="home__content">
      <div class="home__content__info">
        <p>Суть нашего сервера - ролевый отыгрыш персонажа. В отличии от поводок по знаменитым системам вроде DnD или
          низкокачественных серверов с элементами ролеплея, целью игры не ставится пройти все данжи, прокачать персонажа
          до максимального уровня и/или победить всех, собрав "легендарки". Целью игры выступает сам процесс, отыгрыш
          персонажа, его характера, страхов, целей. Вы можете играть как амбициозного культиста так и безыдейного
          аристократа что, начитавшись романов, отправился в приключение о котором ничего не знает.
        </p>
        <img src="../assets/images/home-content1.png">
        <p>
          Прочтите эту страницу!
        </p>
        <p>
          Она даст вам основные понятия о игре на нашем сервере и что нужно сделать.
        </p>
        <Button class="home__content__info__btn">НАЧАТЬ ИГРАТЬ</Button>
      </div>
      <div class="home__content__info">
        <img src="../assets/images/home-content2.png">
        <p>Из этого следует простое правило - не выходить за рамки персонажа. Не использовать информацию полученную вне игры, не пытаться координироваться через приложения вроде Discord'а, не пытаться победить всех и вся играя на нашем сервере как на очередной запланированной игре по какой-либо готовой системе где это всё предполагается. Администрация проекта будет стараться пресекать подобные инциденты, а нарушителей - наказывать так, как посчитает нужным. </p>
        <img src="../assets/images/home-content3.png">
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
import Button from "../components/ui/Button";

export default {
  name: "Home",
  components: {Button, Layout}
}
</script>

<style lang="scss" scoped>
@media (max-width: 700px) {
  .home__content {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;

    &__info {
      width: 90%;
    }
  }
}

@media (min-width: 701px) {
  .home__content__info {
    width: 35%;
  }
}

.home {

  &__header {
    height: 25%;
    overflow-y: auto;

    &__img {
      height: 25%;
      width: auto;
      min-width: 100%;
      overflow: hidden;
    }
  }

  &__content {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    &__info {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 40px;

      & p {
        margin: 20px 5% 20px 5%;
      }

      & img {
        height: 200px;
        width: 100%;
      }

      &__btn {
        color: #BDA730;
        border: 2px solid rgba(189, 167, 48, 0.4);
        border-radius: 28px;
        background: rgba(114, 109, 95, 0.1);
        width: 50%;
        min-width: 150px;
        height: 50px;
      }
    }
  }
}
</style>
