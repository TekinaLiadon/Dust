<template>
  <SmoothHeight>
  <div class="character">
    <Button class="character__btn"
            style="position: absolute; top: -40px; right: 0;"
            @protected-click="editCharacter"
    >
      Редактировать
    </Button>
    <h1 class="character__header">
      {{ formData.name }}
    </h1>
    <div class="character__main">
      <div class="character__img">
        <transition name="fade-in">
        <h3 v-if="!isEdit">Игровой логин: {{ formData.login }}</h3>
        <div class="character__edit__login" v-else>
          Игровой логин:
          <InputWrap class="character__edit__input" v-model="formData.login"/>
        </div>
        </transition>
        <img
            src="../../assets/images/home-content2.png"
            style="height: 90%;; margin-top: 10px; border: 2px solid var(--main-border);"
        />
      </div>
      <div class="character__description">
        <h3>Описание:</h3>
        <div class="character__description__content">
          <transition name="fade-in">
          <p class="character__p" v-if="!isEdit">
            {{ formData.description }}
          </p>
          <Textarea
              v-else
              :info="{
                        cols: 90,
                        rows: 30,
                      }"
              v-model="formData.description"
          />
          </transition>
        </div>
      </div>
    </div>
    <h1 class="character__header">
      Характер
    </h1>
    <div class="character__block">
      <p class="character__p" v-if="!isEdit">{{ formData.personality }}</p>
      <Textarea
          v-else
          :info="{
                        cols: 200,
                        rows: 31,
                      }"
          v-model="formData.personality"
      />
    </div>
    <h1 class="character__header">
      Биография
    </h1>
    <div class="character__block">
      <p class="character__p" v-if="!isEdit">{{ formData.biography }}</p>
      <Textarea
          v-else
          :info="{
                        cols: 200,
                        rows: 31,
                      }"
          v-model="formData.biography"
      />
    </div>
    <h1 class="character__header">
      Боевые характеристики
    </h1>
    <div class="character__block">
      <p class="character__p">{{ formData.personality }}</p>
    </div>
    <h1 class="character__header">
      Дополнительное
    </h1>
    <div class="character__block">
      <p class="character__p" v-if="!isEdit">{{ formData.extra }}</p>
      <Textarea
          v-else
          :info="{
                        cols: 200,
                        rows: 31,
                      }"
          v-model="formData.extra"
      />
    </div>
    <div class="character__btn-group">
      <Button class="character__btn">
        Сохранить
      </Button>
      <Button class="character__btn">
        Выбрать скин
      </Button>
    </div>
  </div>
  </SmoothHeight>
</template>

<script>
import Button from "../../components/ui/Button";
import Textarea from "../../components/ui/Textarea";
import InputWrap from "../../components/ui/InputWrap";
import SmoothHeight from "../../components/ui/SmoothHeight";

export default {
  name: "Character",
  components: {SmoothHeight, InputWrap, Textarea, Button},
  data() {
    return {
      isEdit: false,
      formData: {
        name: 'Название персонажа',
        login: 'Прикол',
        description: 'Часто носит шлемак закрытого типа с красными окулярами и встроенным противогазом.\n' +
            '\n' +
            'Голос её хриплый, скрипучий и неприятнный. Женищна много курит последнее время.\n' +
            '\n' +
            'Женщина выглядит молодо, не на свой возраст. Однако мелкие морщины под глазами, всё же, выдают его. Сейчас её лицо вновь украшают синяки под глазами\n' +
            '\n' +
            'Лицо её — усталое, однако взгляд — почти дикий. Под левым глазом красуется неоновая молния которую девушка усердно скрывает за волосами.\n' +
            '\n' +
            'Одета девушка в крутую куртку из ткани, чёрную водолазку без рукавов, обтягивающие тканевые штаны и высокие военные берцы.\n' +
            '\n' +
            'Перчатка на правой руке полностью скрывает кисть. Половины безымянного пальца на левой руке нет. За спиной носит стандартную винтовку с оптикой.',
        personality: 'После инцидента с Аники взяла себя в руки.\n' +
            '\n' +
            'Побывала в подвале в ЖК Аргоне, общалась. Заявила что хочет спасать людей. Подвал сказал — «Если сможешь выйти отсюда, значит тебе хватит сил защитить своих друзей. Ты выйдешь с широко открытыми глазами или падешь, высоко задрав голову.»\n' +
            '«Иди с широко открытыми глазами, Кэтрин»\n' +
            '\n' +
            'Вернула старую униформу «Патруля», разочаровавшись в Максиме и её компании и решив вернутся к истокам. Так же сильно её задела фраза что она — рейдер, от Аквипа\n' +
            '\n' +
            'Это для меня: (Я подумал над характером исходя из бэкстори)\n' +
            'Во первых — Свободолюбивая, так как пыталась выбраться из рабства, сбежать, за что и лишилась пальца. Она не любит когда что либо или кто либо её ограничивает в чём то\n' +
            '2. Упёртая. Очень. Вряд ли Патруль хотел принимать к себе 15 летнюю девку, но она доказала что сможет туда попасть, поставив себе цель. Из этого вытекает следующее\n' +
            '3. Целеустремленная. Ставя цель — идёт к ней. Иначе никак\n' +
            '4. Уверенная в себе. Она, сначала, сломалась в рабстве, потом закалилась там. Затем вновь сломалась после неудачных операций за Патруль, будучи самоуверенной, после чего стала просто уверенной в себе и  своих силах.\n' +
            '…\n' +
            '5. Её научило прошлое что бы она всегда сувала свой нос в чужие дела. Во первых потому что она считает что сможет помочь и не надо будет разбираться, во вторых что бы не допустить прошлого опыта. Из-за этого она любит находится в обществе людей а не как я играл — не любит.\n' +
            '6. Принципиальная. Она вряд ли изменит свой взгляд на вещи по типу убийства или прочего.\n' +
            '7. Саркастичная и немного садист — Поскольку над ней издевались ранее, когда она была мелкой, она приобрела привычку язвить, использовать сарказм а в редких случаях — наслаждаться мучениями противника.\n' +
            '8. Начитанная и  умная. Ну тут понятно — её обучали в патруле и у нее естественно была тяга быть умной что бы не попадать более в глупые ситуации как с отцом.\n' +
            '9. Юморная. Юмор — любит. Но любит очень тонкий или сказанный прям в точное место — такой, над которым нужно подумать.\n',
        biography: 'Кэтрин принимала множество неверных решений в своей жизни, некоторые из которых стоили чужой жизни. Женщина чувствует глубокую ответственность за свои поступки и стремится искупить свои ошибки. Так, из-за чрезмерной самоуверенности в себе и своем деле, наивная и молодая Кэт стала свидетелем достаточно зверского убийства нескольких людей. Эти события сильно влияют на Кэтрин и не только делают её характер более мрачным и жестким но и дает ей необходимую силу воли, которая понадобится девушке в своём деле.\n' +
            '\n' +
            'Как и положено сильной личности девушка может действовать очень решительно и смело и, в то время как Кэт зачастую удивляют и пугают объекты, личности и ситуации, встречающиеся у нее на пути, она быстро адаптируется к ним. Зачастую, после событий что требуют заглушить эмоции и действовать хладнокровно, Кэт, в моменты спокойствия, захлебывает паника и страх. Если эти моменты чередуются — то отходняк может преследовать её днями. Эта особенность вынудила Кэтрин приобрести тягу к никотину и алкоголю — даже самому паршивому. Иногда она прибегает и к помощи наркотических веществ, хоть и лицемерит в какой то мере, зачастую на людях демонстрируя отвращение к наркоманам. Конечно же Кэт просто считает себя вовсе не наркоманкой и алкоголичкой, а принятие оных веществ трактует как исключительно в медицинских целях.\n' +
            '\n' +
            'Зачастую женщина выражает глубоко укоренившуюся ненависть к самой себе и говорит новым знакомым, что чем меньше они знают о ней — тем лучше. Помимо давних сожалений такая позиция, возможно, порождена её неуверенностью в себе, которую она, например, демонстрировала в ранние годы своей жизни.\n' +
            '\n' +
            'Старается предотвращать смерти. Сама старается убивать редко, зная цену жизни. Негодяев, впрочем, не жалеет, если уверена в том что они таковые.\n',
        extra: '',
      }
    }
  },
  methods: {
    editCharacter() {
      this.isEdit = !this.isEdit
      console.log('aa')
    }
  }
}
</script>

<style lang="scss">
.character {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &__header {
    background: rgba(202, 187, 147, 0.1);
    border: 2px solid var(--main-border);
    margin-top: 18px;
    margin-bottom: 18px;
    padding: 5px;
    min-width: 450px;
    text-align: center;
  }

  &__edit {
    &__login {
      display: flex;
      align-items: center;
      color: var(--main-text);
      font-size: 20px;
      height: 40px;
    }

    &__input {
      margin-left: 10px;
      min-width: 200px;
    }
  }

  &__p {
    max-width: 90%;
    margin: 10px
  }

  &__btn {
    margin: 10px;
    padding: 7px;
    min-width: 80px;
    border: 2px solid var(--main-border);
    background: var(--main-back);
    color: var(--main-text);
    font-size: 15px;
  }

  &__btn-group {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  &__main {
    display: flex;
    width: 100%;
    justify-content: space-around;
    text-align: center;
  }

  &__img {
    min-width: 40%;
    max-width: 40%;
    min-height: 500px;
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  &__description {
    min-width: 40%;
    max-width: 40%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__content {
      border: 2px solid var(--main-border);
      background: var(--main-back);
      height: 90%;
      overflow: auto;
      display: flex;
      justify-content: center;
    }
  }

  &__block {
    min-width: 90%;
    max-width: 90%;
    overflow: auto;
    min-height: 200px;
    max-height: 500px;
    border: 2px solid var(--main-border);
    background: var(--main-back);
    display: flex;
    justify-content: center;
  }
}
</style>
