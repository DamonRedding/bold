import { Cell, Grid, TextArea } from '../../../../lib'

function TextAreaDemo() {
  return (
    <Grid>
      <Cell xs={12} md={12}>
        <TextArea label='Post body' name='empty' placeholder='Enter the body of your post' required />
      </Cell>
      <Cell xs={12} md={6}>
        <TextArea label='Comment' name='disabled' disabled />
      </Cell>
      <Cell xs={12} md={6}>
        <TextArea label='Comment' name='comment' errorText='Invalid comment' />
      </Cell>
    </Grid>
  )
}

export default TextAreaDemo
