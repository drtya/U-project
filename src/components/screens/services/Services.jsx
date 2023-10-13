'use client'
import styles from './Services.module.scss'
import Image from 'next/image'
//tools img
import css from '@/assets/services/tools/css.svg'
import diamond from '@/assets/services/tools/diamond.svg'
import figma from '@/assets/services/tools/figma.svg'
import html from '@/assets/services/tools/html.svg'
import illustrator from '@/assets/services/tools/illustrator.svg'
import javascript from '@/assets/services/tools/javascript.svg'
import photoshop from '@/assets/services/tools/photoshop.svg'
import python from '@/assets/services/tools/python.svg'
//decoration img
import figmaBg from '@/assets/services/bgDecore/figma.svg'
import jsBg from '@/assets/services/bgDecore/js.svg'
import petBg from '@/assets/services/bgDecore/pet.svg'
import shieldTickBg from '@/assets/services/bgDecore/shield-tick.svg'
import treeBg from '@/assets/services/bgDecore/tree.svg'
import userSearchBg from '@/assets/services/bgDecore/user-search.svg'


const Services = () => {
  return (
    <div className={styles.services + ' container'}>
      <h1 className={styles.services_title}>Услуги</h1>
      <p className={styles.services_subtitle}>Мы предлагаем инновационные услуги, основанные на потребностях вашего бизнеса.</p>
      <div style={{ position: 'relative' }}>
        <Image src={figmaBg} alt='decoreBg' className={styles.services_decor_left} />
        <div className={styles.services_box}>
          <h3 className={styles.services_box_title}>Дизайн</h3>
          <p className={styles.services_box_descr}>Дизайн веб-сайта - это один из ключевых факторов, определяющих его успех и эффективность. Эффективный дизайн объединяет в себе функциональность, красоту и удобство использования. Дружелюбный пользовательский интерфейс (UI) и приятный пользовательский опыт (UX) - это неотъемлемые элементы успешного дизайна.</p>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <Image src={jsBg} alt='decoreBg' className={styles.services_decor_right} />
        <div className={styles.services_box}>
          <h3 className={styles.services_box_title}>Разработка</h3>
          <p className={styles.services_box_descr}>Разработка веб-сайтов - это сложный и творческий процесс, включающий создание уникальных и функциональных онлайн-ресурсов. Наши опытные специалисты учитывают потребности каждого заказчика, строят удобные интерфейсы и обеспечивают надежность и безопасность сайта.</p>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <Image src={shieldTickBg} alt='decoreBg' className={styles.services_decor_left} />
        <div className={styles.services_box}>
          <h3 className={styles.services_box_title}>Поддержка</h3>
          <p className={styles.services_box_descr}>Поддержка веб-сайта после разработки - это ключевой этап, который обеспечивает его стабильную работу и безопасность. Мы регулярно проверяем функциональность и скорость загрузки сайта, следя за его надежностью и эффективностью. Наши структурированные процессы сосредотачиваются на технических аспектах, чтобы достичь желаемых результатов.</p>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <Image src={userSearchBg} alt='decoreBg' className={styles.services_decor_right} />
        <div className={styles.services_box}>
          <h3 className={styles.services_box_title}>SEO - оптимизация</h3>
          <p className={styles.services_box_descr}>Поддержка веб-сайта после разработки - это ключевой этап, который обеспечивает его стабильную работу и безопасность. Мы регулярно проверяем функциональность и скорость загрузки сайта, следя за его надежностью и эффективностью. Наши структурированные процессы сосредотачиваются на технических аспектах, чтобы достичь желаемых результатов.</p>
        </div>
      </div>
      <div className={styles.services_tools}>
        <h2 className={styles.services_tools_title}></h2>
        <div style={{ display: 'flex', gap: 'clamp(10px,3vw,30px)', justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', width:'50%' }}>
            <Image src={treeBg} alt='decoreBg' className={styles.services_tools_decor_left}  />
            <div className={styles.services_tools_box}>
              <h3 className={styles.services_tools_box_title}>Разработка</h3>
              <p className={styles.services_tools_box_descr}>При разработке сайта мы полагаемся на современные и разнообразные инструменты, чтобы создать функциональный сайт.</p>
              <div className={styles.services_tools_box_imgs}>
                <Image src={javascript} className={styles.services_tools_box_imgs_el}/>
                <Image src={python} className={styles.services_tools_box_imgs_el}/>
                <Image src={html} className={styles.services_tools_box_imgs_el}/>
                <Image src={css} className={styles.services_tools_box_imgs_el}/>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', width:'50%' }}>
            <Image src={petBg} alt='decoreBg' className={styles.services_tools_decor_right}  />
            <div className={styles.services_tools_box}>
              <h3 className={styles.services_tools_box_title}>Дизайн</h3>
              <p className={styles.services_tools_box_descr}>Мы используем современные инструменты, чтобы создать уникальные визуальные решения.</p>
              <div className={styles.services_tools_box_imgs}>
                <Image src={figma} className={styles.services_tools_box_imgs_el}/>
                <Image src={diamond} className={styles.services_tools_box_imgs_el}/>
                <Image src={illustrator} className={styles.services_tools_box_imgs_el}/>
                <Image src={photoshop} className={styles.services_tools_box_imgs_el}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services