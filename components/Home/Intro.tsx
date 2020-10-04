import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Intro = () => {
  return (
    <Wrapper>
      <Container>
        <Logo
          src="images/logo.svg"
          alt="Logo"
          initial={{ opacity: 0, scale: 1, y: 40 }}
          animate={{ opacity: 1, scale: 1.6, y: 0 }}
          transition={{ type: 'spring', damping: 70, delay: 0.2 }}
        />
        <Title
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 60, delay: 0.7 }}
        >
          this ain't love ep
        </Title>
        <Link href="/this-aint-love">
          <a>
            <Cta
              initial={{ opacity: 0, scale: 1, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 60, delay: 3.2 }}
            >
              Begin journey
            </Cta>
          </a>
        </Link>
      </Container>
    </Wrapper>
  )
}

export default Intro

// Styles
const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Logo = styled(motion.img)`
  margin-bottom: 3rem;
`

const Title = styled(motion.h2)`
  color: #cbcbcb;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 3.4px;
  margin-bottom: 6rem;
`

const Cta = styled(motion.button)`
  color: #cbcbcb;
  background: transparent;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.4px;
  border: none;
  padding: 0.8em 1.2em;
  border-radius: 5px;
  cursor: pointer;
`
