import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping',
  title: 'Topping',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'Name of topping',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Vegetarian?',
      options: {
        layout: 'checkbox',
      }
    },
  ],
  preview: {
    select: {
      name: 'name', 
      vegetarian: 'vegetarian',
    },
    prepare: ({name, vegetarian}) => ({
      title: `${name} ${vegetarian ? 'V' : ''}`
    })
  }
}