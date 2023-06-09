import React from 'react'
import styles from './dashboardstyle/Topbarstyle.module.scss'
import { Button } from '@mui/material'
import {AiFillCaretDown} from 'react-icons/ai'
import { IoMdAddCircle } from 'react-icons/io'
const Topbar = () => {
  return (
    <div className={styles.topbar}>
    <div className={styles.left}>
     <div className={styles.emojiback}><img className={styles.emoji} src='./emoji.png' alt='emoji'/></div>
     <div className={styles.teamname}>Boro Team</div>
     <div className={styles.dropdown}><AiFillCaretDown/></div>
     <div className={styles.addbtn}><IoMdAddCircle/></div>
     </div>
     <div className={styles.right}>
     <div><img className={styles.emojiuser} src='./user.png'/></div>
     <div>Zahra hasht..</div>
     <div className={styles.dropdown}><AiFillCaretDown/></div>
     </div>
    </div>
  )
}

export default Topbar