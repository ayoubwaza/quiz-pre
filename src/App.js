import React, { useState } from "react";
import styles from "./App.module.scss";
import BgImage from "./Images/ooops.jpg";
function App() {
  const [added, setAdded] = useState(0);
  return (
    <div dir="rtl" className={styles.App}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                  body {
                    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(226, 122, 24, 0.6)),
                    url(${BgImage});
                  background-position: center;
                  background-size: cover;
                  background-repeat: no-repeat;
                  }
          `,
        }}
      />
      <div className={styles.handle_nmaproimg}>
        <h1>كريم القرن الذهبي</h1>
        <div className={styles.handle_product}>
          <img
            src="https://gold-horn.b-cdn.net/pre_product.webp"
            width="450"
            alt=""
          />
        </div>
      </div>
      <div className={styles.handle_Quiz}>
        {added === 1 ? (
          <div>
            <h1>
              نبداو بالمشكل اللي كاين عند العديد من الرجال ، واللي هو سرعة القذف
              ،
            </h1>
          </div>
        ) : added === 2 ? (
          <div>
            <h1>
              واش كتعاني من شي مرض مزمن ، بحال مرض السكري ، و لا مرض في القلب ؟
            </h1>
          </div>
        ) : added === 3 ? (
          <div>
            <h1>
              واش كتمارس التدخين ؟ الا الجواب نعم .<br />
              شحال كتكمي تقريبًا في النهار
            </h1>
          </div>
        ) : added === 4 ? (
          <div>
            <h1>واش كتشرب الشراب ؟</h1>
          </div>
        ) : added === 5 ? (
          <div>
            <h1>شحال تقريبا الطول ديال القلم ديالك ؟</h1>
          </div>
        ) : added === 6 ? (
          <div>
            <h1>واش معمرك مارستي العادة السرية ؟</h1>
          </div>
        ) : added === 7 ? (
          ""
        ) : (
          <div>
            <h1>للأسف ، منقدروش نعطيو هاد الدواء لجميع الرجال …</h1>
          </div>
        )}
        {added === 1 ? (
          <div>
            <p>
              واش هادشي كيوافق المشكل لعندك ؟ بعد المداعبة …كتجي المرحلة ديال
              تنعس مع مرتك ، ياله كتبدا … كيهبط ليك الما و كتحس براسك مبقيتيش
              قادر تزيد ، و حتى القلم ديالك كيترخا ؟
            </p>
          </div>
        ) : added === 2 ? (
          ""
        ) : added === 3 ? (
          " "
        ) : added === 4 ? (
          ""
        ) : added === 5 ? (
          ""
        ) : added === 6 ? (
          ""
        ) : added === 7 ? (
          <div>
            <p>
              شكرا على اجتيازك الاختبار ، من خلال الأجوبة لدخلتي ، كيبان أن
              حالتك ، هي لكيصلاح ليها هاد العلاج … نتمناو أنك جاوبتي بصراحة ، و
              مخبيتي علينا والوا ، حيت هادشي دايرينو ماشي علينا و انما على قبلك
              نتا … قبل مكنعطيو للزبون ديالنا العلاج كنحرصوا على أنه يكون غادي
              يعطيه النتيجة لكيقلب عليها دبا بامكانك تستافد من العلاج لعاون كثر
              من 950 رجل يعالج المشكل لعندو في المغرب فقط
            </p>
          </div>
        ) : (
          <div>
            <p>
              خاصنا نشوفو حالتك الصحية ، و الأعراض لعندك … و من ثم ، غادي نعرفوا
              واش نتا مؤهل باش تاخذ هاد العلاج أولا لا . <br />
              مستعد ؟
              <br />
              إذن غادي نعطيوك بعض الأسئلة ، و ايخصك تجاوبنا عليها
            </p>
          </div>
        )}
        {added === 1 ? (
          <div className={styles.thetwo_btns}>
            <button onClick={() => setAdded(added + 1)}>
              نعم .. هذا هو المشكل بالضبط لعندي كيما شرحتوه
            </button>
            <button onClick={() => setAdded(0)}>
              لا معنديش هاد المشكل أنا
            </button>
          </div>
        ) : added === 2 ? (
          <div className={styles.thetwo_btns}>
            <button onClick={() => setAdded(added + 1)}>
              نعم عندي مرض مزمن
            </button>
            <button onClick={() => setAdded(added - 1)}>
              لا معندي تا مرض مزمن
            </button>
          </div>
        ) : added === 3 ? (
          <div className={styles.thetwo_btns}>
            <button onClick={() => setAdded(added + 1)}>
              مابين گارو تال 3
            </button>
            <button onClick={() => setAdded(added + 1)}>
              ما بين ثلاتة تال 7 گوارو كل نهار
            </button>
            <button onClick={() => setAdded(added + 1)}>
              كثر من 7 الگوارو
            </button>
            <button onClick={() => setAdded(added + 1)}>
              لا مكنكميشً نهائيًا
            </button>
          </div>
        ) : added === 4 ? (
          <div className={styles.thetwo_btns}>
            <button onClick={() => setAdded(added + 1)}>لا مكنشربش</button>
            <button onClick={() => setAdded(added + 1)}>
              وي كنشرب غير شويا
            </button>
            <button onClick={() => setAdded(added + 1)}>وي كنشرب بزاف</button>
          </div>
        ) : added === 5 ? (
          <div className={styles.thetwo_btns}>
            <button onClick={() => setAdded(added + 1)}>
              مآ بين 3 تال 6 سنتيمتر ؟
            </button>
            <button onClick={() => setAdded(added + 1)}>
              مآ بين 6 تال 11 سنتيمتر ؟
            </button>
            <button onClick={() => setAdded(added + 1)}>
              أكثر من 11 سنتيمتر ؟
            </button>
          </div>
        ) : added === 6 ? (
          <div className={styles.thetwo_btns}>
            <button onClick={() => setAdded(added + 1)}>
              لا معمرني مارستها{" "}
            </button>
            <button onClick={() => setAdded(added + 1)}>
              لا كنمارسها مرة مرة
            </button>
            <button onClick={() => setAdded(added + 1)}>
              لا كنت كنمارسها بزاف ديال المرات
            </button>
          </div>
        ) : added === 7 ? (
          <div className={styles.thetwo_btns}>
            <a href="https://land.golden-horn.store/">
              <button>أطلب علاجك من هنا</button>
            </a>
          </div>
        ) : (
          <div className={styles.thetwo_btns}>
            <button onClick={() => setAdded(added + 1)}>
              نعم ، أنا مستعد لاجتياز الاختبار !
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
