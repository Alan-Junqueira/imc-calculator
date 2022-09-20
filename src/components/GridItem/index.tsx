/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Level } from '../../helpers/imc'

import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

import styles from './styles.module.css'

type GridItemProps = {
  data: Level
}

const GridItem = ({data}: GridItemProps) => {
  return (
    <div className={styles.main} style={{backgroundColor: data.color}}>
      <div className={styles.gridIcon}>
        <img src={data.icon === 'up' ? upImage : downImage} alt="" width={30}/>
      </div>
      <div className={styles.gridTitle}>{data.title}</div>
      {data.yourImc &&
        <div className={styles.yourImc}>Seu imc é de {data.yourImc} kg/m²</div>
      }
      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong>
        </>
      </div>
    </div>
  )
}

export default GridItem