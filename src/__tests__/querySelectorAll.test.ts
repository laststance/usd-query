import { $$ } from '../index'
describe('$$', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
    `
  })

  it('should return a NodeList of elements with the given selector', () => {
    const elements = $$('.test')
    expect(elements).toBeDefined()
    expect(elements.length).toBe(3)
  })

  it('should return an empty NodeList if no elements match the selector', () => {
    const elements = $$('.non-existent')
    expect(elements).toBeDefined()
    expect(elements.length).toBe(0)
  })

  it('should return an empty NodeList if the selector is invalid', () => {
    const elements = $$(null as any)
    expect(elements).toBeDefined()
    expect(elements.length).toBe(0)
  })

  it('should elements iterate as Array', () => {
    const elements = $$('.test')
    expect(elements).toBeDefined()
    expect(elements.length).toBe(3)
    elements.forEach((element) => {
      expect(element).toBeDefined()
      expect(element!.classList.contains('test')).toBe(true)
    })
  })

  it('should set on handler to all elements', () => {
    const elements = $$('.test')
    const fn = vi.fn()
    // @ts-expect-error add certain types later
    elements.on('click', fn)
    elements.forEach((element) => {
      element.dispatchEvent(new Event('click'))
    })
    expect(fn).toBeCalledTimes(3)
  })
})
