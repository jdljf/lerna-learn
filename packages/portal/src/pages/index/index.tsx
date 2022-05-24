import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { fbutton } from 'f-ui'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    console.log(fbutton());
    
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
