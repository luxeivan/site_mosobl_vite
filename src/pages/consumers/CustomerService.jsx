import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import TopImage from "../../components/TopImage";
import img3801d8dbad0155e175330105a314be91 from "../../img/3801d8dbad0155e175330105a314be91.jpg";

export default function CustomerService() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img3801d8dbad0155e175330105a314be91} title={"Обслуживание потребителей"} />

      <div className="page-grid__content" id="content">
        
        <Link to="/filials" >
          <div className="accordion-row" style={{marginBottom: "40px"}}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Офисы обслуживания потребителей</span>
            </div>
          </div>
        </Link>
        <h4 className="branch-post__caption">Заочное обслуживание посредством телефонной связи</h4>
        <div class="text-area">
          <p>
            Получить консультацию по вопросам технологических нарушений и перебоев в электроснабжении, осуществления технологического присоединения, включая консультации по содержанию договоров технологического присоединения и технических условий, по
            работе с электронными заявками в Личном кабинете, а также по всем видам дополнительных услуг, вы можете по телефону горячей линии АО «Мособлэнерго»:{" "}
            <a href="tel:84959950099">
              <b>8 (495) 99-500-99</b>
            </a>
          </p>
          <p>
            По вопросам об осуществлении технологического присоединения, включая консультации по содержанию договоров технологического присоединения и технических условий, по работе с электронными заявками в Личном кабинете, а так же по всем видам дополнительных услуг, вы можете по телефону:
            <a href="tel:84957850000">
              <b>8 (495) 785-00-00</b>
            </a>
          </p>
          <p>
            Справки по письмам:<b> </b>
            <a href="tel:84957803961">
              <b>8 (495) 780-39-61</b>
            </a>
          </p>
          <p>
            <b>либо по электронным адресам:</b>
          </p>
          <p>
            Электронный адрес:{" "}
            <a href="mailto:mail@mosoblenergo.ru">
              <b>mail@mosoblenergo.ru</b>
            </a>
          </p>
          <p>
            Дополнительные услуги:<b> </b>
            <a href="mailto:uslugi@mosoblenergo.ru">
              <b>uslugi@mosoblenergo.ru</b>
            </a>
          </p>
        </div>
        <h4 className="branch-post__caption">Вопросы и ответы</h4>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">В какую сетевую организацию необходимо обратиться с заявкой?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>
                  Заявки на технологическое присоединение, увеличение ранее присоединенной мощности, изменение категории надежности электроснабжения, изменение точки присоединения, изменение схемы внешнего электроснабжения должны направляться в
                  сетевую компанию, объекты электросетевого хозяйства которой расположены на наименьшем расстоянии от границ участка заявителя. Если на расстоянии менее 300 метров от границ участка заявителя находятся объекты электросетевого
                  хозяйства нескольких сетевых организаций, заявитель вправе направить заявку в любую из них (за исключением заявителей, имеющих намерение осуществить технологическое присоединение энергопринимающих устройств по индивидуальному
                  проекту).
                </p>
                <p>Иные заявки (на переоформление мощности и пр.) подаются в сетевые организации, к объектам электросетевого хозяйства которых присоединены энергопринимающие устройства заявителей.</p>
                <p>Информация о принадлежности объекта электросетевого хозяйства той или иной сетевой организации предоставляется в органах местного самоуправления в течение 15 дней с момента поступления соответствующего запроса.</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Где взять форму заявки на ТП?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>
                  АО «Мособлэнерго» рекомендует воспользоваться разработанными&nbsp;<a href="http://utp.moesk.ru/docs/format-requests-contracts-samples-filling">типовыми формами заявок</a>, размещенными в разделе «Типовые формы».&nbsp;
                </p>
                <p>Вместе с тем, за заявителем остается право подачи заявки в свободной форме при условии указания в тексте обязательных в соответствии с законодательством Российской Федерации сведений.</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Заявитель является новым собственником земельного участка. Предыдущий собственник подписал договор и получил технические условия. Как поступить в данной ситуации новому собственнику?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>Необходимо обратиться в АО «Мособлэнерго» с заявлением о замене стороны в договоре об осуществлении технологического присоединения, приложив документы, подтверждающие переход права собственности.</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Как передаются объекты электросетевого хозяйства третьих лиц на баланс АО «Мособлэнерго»?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>
                  В этих целях заинтересованным лицом (или его уполномоченным представителем) подается письменное обращение на имя Генерального директора АО «Мособлэнерго» с изложением указанного намерения. Данное обращение будет перенаправлено по
                  принадлежности в соответствующее структурное подразделение, представители которого свяжутся с заявителем.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Как подключить отдельно свою половину дома?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>
                  В соответствии с п. 10 Правил к заявке на технологическое присоединение, среди прочих документов, предоставляется копия документа, подтверждающего право собственности или иное предусмотренное законом основание на объект капитального
                  строительства и (или) земельный участок, на котором расположены (будут располагаться) объекты заявителя, либо право собственности или иное предусмотренное законом основание на энергопринимающих устройств.
                </p>
                <p>
                  Согласно статьи 247 Гражданского Кодекса Российской Федерации владение и пользование имуществом, находящимся в долевой собственности, осуществляется по соглашению всех ее участников, а при недостижении согласия - в порядке,
                  устанавливаемом судом.
                </p>
                <p>
                  В случае, если имущество находится в долевой собственности, и доли собственников в нем не выделены, согласие остальных собственников требуется, так как в процессе осуществления мероприятий по технологическому присоединению могут
                  быть затронуты интересы третьих лиц (остальных собственников имущества).
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Как узнать о стадии рассмотрения заявки?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>
                  При подаче заявки на технологическое присоединение Вы получаете секретный код, с помощью которого у Вас есть возможность отслеживать ее статус на портале АО «Мособлэнерго» с момента регистрации заявки до фактического подключения.
                </p>
                <p>Для этого необходимо:</p>
                <p>
                  1. зарегистрироваться на Портале потребителя <a href="http://moetp.ru">http://moetp.ru</a>;
                </p>
                <p>2. в разделе «Мои заявки» нажать кнопку «Заявка подана через ЦОК»;</p>
                <p>3. ввести номер заявки и секретный код.</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Какие документы должен предъявить представитель при подаче заявок в АО «Мособлэнерго» и получении документов?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>В соответствии с действующим законодательством Российской Федерации при взаимодействии с АО «Мособлэнерго» через представителя, полномочия последнего должны быть подтверждены надлежащим образом:</p>
                <p></p>
                <ul>
                  <li>либо уставом и приказом о назначении на должность, позволяющую действовать от имени организации без доверенности;</li>
                  <p></p>
                  <p></p>
                  <li>либо доверенностью, оформленной в соответствии с требованиями Гражданского кодекса Российской Федерации.</li>
                </ul>
                <p></p>
                <br />{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Каким образом можно получить готовые документы?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>Подаче заявки у Вас есть возможность выбрать один из трех способов получения готовых документов: в центральном клиентском офисе, в территориальном филиале или письмом с уведомлением (по почте России).</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Каким образом осуществляется оплата за технологическое присоединение?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>После заключения договора Вам необходимо внести плату, размер и порядок внесения которой указан в пунктах 10 и 11 договора. Вы можете произвести оплату как по квитанции (счету), так и по реквизитам, указанным в договоре.</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Какой нормативный документ регламентирует порядок ТП?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>
                  Правила технологического присоединения энергопринимающих устройств потребителей электрической энергии, объектов по производству электрической энергии, а также объектов электросетевого хозяйства, принадлежащих сетевым организациям и
                  иным лицам, к электрическим сетям, утвержденные постановлением Правительства Российской Федерации от 27.12.2004г. № 861.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Какой уровень напряжения выбрать?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>При выборе уровня напряжения в заявке стоит учитывать следующее.</p>
                <p>Передача электроэнергии от трансформаторных подстанций к потребителям осуществляется сетевыми организациями по сетям 380 В.</p>
                <p>Это сделано в целях обеспечения максимально эффективной передачи электроэнергии к потребителям, а также с целью максимального снижения потерь в процессе транспортировки.</p>
                <p>Напряжение в однофазной сети равно 220 В, а в трехфазной – 380 В.</p>
                <p>
                  При подаче заявки стоит учитывать, что при использовании трехфазной сети есть вероятность неравномерного распределения нагрузки на каждую фазу. К примеру, от одной фазы будет запитан мощный нагреватель и электрический котел, а от
                  другой – всего лишь холодильник и телевизор. Тогда будет иметь место неприятный эффект, так называемый «перекос фаз» – несимметрия токов и напряжений, который может повлечь за собой выход из строя некоторых бытовых электроприборов.
                  Чтобы этого избежать, необходимо более тщательно планировать распределение нагрузки еще в процессе монтажа электрической сети. Также трехфазная сеть в отличие от однофазной требует больше проводов, кабелей и автоматических
                  выключателей, следовательно, обойдется намного дороже.
                </p>
                <p>
                  Три фазы необходимы одному абоненту только в случае использования на кухнях старых трехфазных электрических плит или для подключения чрезвычайно мощных потребителей в частных домах (циркулярная пила, мощные нагревательные и
                  отопительные устройства и др).
                </p>
                <p>
                  При присоединении заявителя по уровню напряжения 220 В, проводится только одна фаза из трех. В данной ситуации возможность присоединения ограничивается мощностью 6 кВт. Ограничение необходимо для того, чтобы избежать упомянутого
                  ранее «перекоса фаз», и является единственным возможным способом распределения нагрузки между потребителями, присоединенными к одной линии 380 В для предотвращения выхода из строя некоторых бытовых электроприборов.
                </p>
                <p>
                  При присоединении заявителя по уровню напряжения 6000/10000/20000 В на него ложится бремя строительства трансформаторных подстанций (трансформаторная подстанция — электроустановка, предназначенная для приема, преобразования
                  (повышения или понижения) напряжения в сети переменного тока и распределения электроэнергии в системах электроснабжения потребителей сельских, поселковых, городских, промышленных объектов. Состоит из силовых трансформаторов,
                  распределительного устройства РУ, устройства автоматического управления и защиты, а также вспомогательных сооружений).
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Категории надежности электроснабжения</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>В отношении обеспечения надежности электроснабжения электроприемники разделяются на следующие три категории.</p>
                <p>
                  Электроприемники первой категории - электроприемники, перерыв электроснабжения которых может повлечь за собой опасность для жизни людей, угрозу для безопасности государства, значительный материальный ущерб, расстройство сложного
                  технологического процесса, нарушение функционирования особо важных элементов коммунального хозяйства, объектов связи и телевидения.
                </p>
                <p>
                  Из состава электроприемников первой категории выделяется особая группа электроприемников, бесперебойная работа которых необходима для безаварийного останова производства с целью предотвращения угрозы жизни людей, взрывов и пожаров.
                </p>
                <p>
                  Электроприемники второй категории - электроприемники, перерыв электроснабжения которых приводит к массовому недоотпуску продукции, массовым простоям рабочих, механизмов и промышленного транспорта, нарушению нормальной деятельности
                  значительного количества городских и сельских жителей.
                </p>
                <p>Электроприемники третьей категории - все остальные электроприемники, не подпадающие под определения первой и второй категорий.</p>
                <p>1 и 1-ая особая категории – потребители электрической энергии (мощности), ограничение режима потребления электрической энергии которых может привести к экономическим, экологическим, социальным последствиям:</p>
                <p>
                  1. государственные органы, в том числе Федеральная служба безопасности Российской Федерации, Министерство внутренних дел Российской Федерации, Федеральная служба охраны Российской Федерации, Служба внешней разведки Российской
                  Федерации, Главное управление специальных программ Президента Российской Федерации, медицинские учреждения, государственные учреждения ветеринарии, а также организации связи - в отношении объектов сетей связи;
                </p>
                <p>2. организации, осуществляющие эксплуатацию объектов централизованного водоснабжения и (или) канализации населенных пунктов, - в отношении этих объектов;</p>
                <p>3. угольные и горнорудные предприятия - в отношении объектов вентиляции, водоотлива и основных подъемных устройств, а также метрополитен - в отношении объектов, используемых для обеспечения перевозки пассажиров;</p>
                <p>
                  4. воинские части Министерства обороны Российской Федерации, Министерства внутренних дел Российской Федерации, Федеральной службы безопасности Российской Федерации, Министерства Российской Федерации по делам гражданской обороны,
                  чрезвычайным ситуациям и ликвидации последствий стихийных бедствий и Федеральной службы охраны Российской Федерации;
                </p>
                <p>5. учреждения, исполняющие уголовные наказания, следственные изоляторы, образовательные учреждения, предприятия и органы уголовно-исполнительной системы;</p>
                <p>6. федеральные ядерные центры и объекты, работающие с ядерным топливом и материалами;</p>
                <p>7. организации, выполняющие государственный оборонный заказ с использованием объектов производства взрывчатых веществ и боеприпасов с непрерывным технологическим процессом, - в отношении таких объектов;</p>
                <p>
                  8. организации железнодорожного, водного и воздушного транспорта - в отношении объектов систем диспетчерского управления, блокировки, сигнализации и защиты железнодорожного, водного и воздушного транспорта, а также субъекты
                  электроэнергетики - в отношении диспетчерских центров субъектов оперативно-диспетчерского управления в электроэнергетике и центров управления объектами электросетевого хозяйства.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Поменялось название организации, сменился собственник, что делать? (переоформление).</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>
                  В случае смены собственника или иного законного владельца энергопринимающих устройств или объектов электроэнергетики, которые ранее в надлежащем порядке были технологически присоединены, а виды производственной деятельности,
                  осуществляемой новым собственником или иным законным владельцем, не влекут за собой пересмотр величины присоединенной мощности и не требуют изменения схемы внешнего электроснабжения и категории надежности электроснабжения, повторное
                  технологическое присоединение не требуется и ранее определенные границы балансовой принадлежности устройств или объектов и ответственности за нарушение правил эксплуатации объектов электросетевого хозяйства не изменяются. При этом
                  новый собственник или иной законный владелец энергопринимающих устройств или объектов электроэнергетики обязан уведомить сетевую организацию или владельца объектов электросетевого хозяйства о переходе права собственности или
                  возникновении иного основания владения энергопринимающими устройствами или объектами электроэнергетики (п. 4 ст. 26 Федерального закона от 26.03.2003г. № 35-ФЗ «Об электроэнергетике»).
                </p>
                <p>Необходимо обратиться с заявкой на переоформление мощности либо в центральный клиентский офис, либо в территориальный филиал, либо через сайт АО «Мособлэнерго».</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">После получения договора об осуществлении технологического присоединения:</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>
                  В течение 30 дней Вам необходимо направить в сетевую организацию подписанный договор либо мотивированный отказ от его подписания. Обращаем Ваше внимание, что дата заключения договора устанавливается сетевой организацией, поскольку
                  договор считается заключенным в момент поступления в сетевую организацию подписанного заявителем экземпляра.
                </p>
                <p>
                  В случае несогласия с любыми из пунктов договора Вам необходимо подготовить протокол разногласий в 2 экземплярах и направить его вместе с подписанным договором в центральный клиентский офис или ближайший территориальный филиал АО
                  «Мособлэнерго». На договоре при этом должна быть пометка «Подписано с протоколом разногласий».
                </p>
                <p>Технические условия (приложение к договору об осуществлении технологического присоединения)</p>
                <p>
                  Технические условия содержат информацию о мероприятиях, которые выполняются как сетевой организацией (пункт 10), так и самим заявителем (пункт 11). Срок выполнения мероприятий обеими сторонами указан в пункте 5 договора. В случае
                  невыполнения или отсутствия уведомления о выполнении мероприятий в указанные сроки, АО «Мособлэнерго» оставляет за собой право инициировать применение штрафных санкций в соответствии с действующим законодательством.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Что делать после выполнения мероприятий по техническим условиям?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>После выполнения мероприятий со своей стороны Вам необходимо обратиться с уведомлением о выполнении Вами технических условий и представить следующую документацию:</p>
                <p></p>
                <ul>
                  <li>
                    <p>
                      копии разделов проектной документации, предусматривающих технические решения, обеспечивающие выполнение технических условий, в том числе решения по схеме внешнего электроснабжения (схеме выдачи мощности объектов по производству
                      электрической энергии), релейной защите и автоматике, телемеханике и связи, в случае если такая проектная документация не была представлена Вами в сетевую организацию до направления уведомления о выполнении технических условий;
                    </p>
                  </li>
                  <li>
                    <p>документы, содержащие информацию о результатах проведения пусконаладочных работ, приемо-сдаточных и иных испытаний (для заявителей, присоединяющихся по сети уровня напряжения 6-10 кВ).</p>
                  </li>
                </ul>
                <p></p>
                <p>Заявителям с запрашиваемой мощностью до 15 кВт включительно (для объектов капитального строительства этажностью не более трех, предназначенных для проживания одной семьи) предоставление проектной документации не требуется.</p>
                <p>Заявителям с запрашиваемой мощностью менее 150 кВт необходимо предоставить разработанную ими проектную документацию в момент осмотра для подтверждения ее соответствия техническим условиям.</p>
                <p>Заявителям с запрашиваемой мощностью свыше 150 кВт необходимо представить согласованный проект электроснабжения в момент уведомления о выполнении технических условий.</p>
                <p>
                  Обращаем внимание, что согласование проектной документации для объектов с присоединяемой мощностью до 670 кВт производится в территориальном филиале, а для объектов с присоединяемой мощностью свыше 670 кВт – в центральном офисе АО
                  «Мособлэнерго».
                </p>
                <p>В течение десяти дней после поступления письменного уведомления о выполнении мероприятий, АО «Мособлэнерго» обеспечивает выезд квалифицированного сотрудника для осуществления осмотра Ваших электроустановок.</p>
                <p>
                  Также есть возможность уведомить о выполнении мероприятий через личный кабинет на сайте АО «Мособлэнерго». Для этого необходимо в личном кабинете войти в раздел «Мои заявки» и отправить заявление о проверке выполнения технических
                  условий, прикрепив отсканированные приложения.
                </p>
                <p>
                  По результатам проверки Вам выдаются Акт осмотра энергопринимающих устройств, Акт проверки выполнения технических условий и Акт допуска прибора учета электрической энергии к эксплуатации. В случае выявления нарушений или
                  несоответствий техническим условиям Вам выдается предписание об их устранении.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Что делать после завершения процедуры технологического присоединения?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>После завершения процедуры технологического присоединения Вам необходимо обратиться в энергосбытовую компанию для заключения договора энергоснабжения.</p>
                <p>
                  Внимание! В случае, если Вы не заключаете договор с энергосбытовой компанией в течение одного месяца с даты фактического присоединения, к Вам могут быть применены штрафные санкции с последующим отключением объекта от электрических
                  сетей.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Что делать, если утеряна разрешительная документация, подтверждающая технологическое присоединение?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>В случае утраты документации, подтверждающей надлежащее технологическое присоединение, заявитель вправе обратиться в сетевую организацию с заявлением (заявкой) о восстановлении ранее выданных документов.</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Что такое аварийная броня?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>
                  Аварийной броней электроснабжения является минимальный расход электрической энергии (наименьшая мощность), обеспечивающие безопасное для персонала и окружающей среды состояние предприятия с полностью остановленным технологическим
                  процессом.
                </p>
                <p>
                  Аварийная броня электроснабжения устанавливается для потребителей электрической энергии - юридических лиц, имеющих электроприемники, фактическая схема электроснабжения которых удовлетворяет требованиям, предъявляемым к
                  электроприемникам первой и второй категорий по надежности электроснабжения.
                </p>
                <p>К электроприемникам аварийной брони электроснабжения относятся: дежурное и охранное освещение, охранная и пожарная сигнализации, насосы пожаротушения, связь, аварийная вентиляция, отопление в зимнее время.</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Что такое технологическая броня?</span>
            <div className="accordion-row__wrap-arrow">
              <svg className="accordion-row__arrow">
                <use href="img/arrow-nav.svg#arrow-nav"></use>
              </svg>
            </div>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>
                  Технологической броней электроснабжения является наименьшая потребляемая мощность и продолжительность времени, необходимые потребителю для безопасного завершения технологического процесса, цикла производства, после чего может быть
                  произведено отключение соответствующих электроприемников.
                </p>
                <p>Технологическая броня электроснабжения устанавливается для потребителей - юридических лиц:</p>
                <p>1. использующих в производственном цикле непрерывные технологические процессы, внезапное отключение которых вызывает опасность для жизни людей, окружающей среды и (или)необратимое нарушение технологического процесса;</p>
                <p>2. имеющих электроприемники, фактическая схема электроснабжения которых удовлетворяет требованиям, предъявляемым к электроприемникам первой категории по надежности электроснабжения.</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
