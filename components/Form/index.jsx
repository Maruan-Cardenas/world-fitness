// Styles
import styles from './Form.module.scss'

// Hooks
import { useForm, ValidationError } from '@formspree/react'

// Icons
import { WhatsApp, Email, Phone } from '../Icons'

const Form = ({ plaga }) => {
  const [state, handleSubmit] = useForm('moqbgyjb')
  if (state.succeeded) {
    return (
      <section>
        <h3>¡Gracias por contactarnos!</h3>
        <p>
          Mensaje recibido correctamente, nos pondremos en contacto lo antes
          posibles.
        </p>
      </section>
    )
  }
  return (
    <section id='contacto' className={styles.form}>
      <h4>Necesitas acabar con una plaga {plaga} contáctanos</h4>
      <div className={styles.formBox}>
        <div className={styles.contact}>
          <Phone />
          <WhatsApp />
          <Email />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Nombre completo'
          />
          <div>
            <input id='email' type='email' name='email' placeholder='Email' />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <span>
              (O)
            </span>
            <input
              type='number'
              name='phone'
              id='phone'
              placeholder='Teléfono'
            />
          </div>
          <textarea
            id='message'
            name='message'
            placeholder='Mensaje'
            cols='10'
            rows='5'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
          <button type='submit' disabled={state.submitting}>
            {state.submitting ? 'Enviando...' : 'Contáctame'}
          </button>
        </form>
        <div className={styles.map}>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.7991925534531!2d-4.767053162218455!3d37.393007645839795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d43211d946dcf%3A0x79816373549d2bb8!2sWORLD%20FITNESS%20CLUB!5e0!3m2!1ses!2ses!4v1676229246656!5m2!1ses!2ses' loading='lazy' referrerpolicy='no-referrer-when-downgrade' />
        </div>
      </div>
    </section>
  )
}

export default Form
