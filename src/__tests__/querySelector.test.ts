import { $ } from '../index'
describe('$', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="test"></div>
    `
  })

  it('should return the element with the given selector', () => {
    const element = $('#test')
    expect(element).toBeDefined()
    expect(element?.id).toBe('test')
  })

  it('should return null if no element matches the selector', () => {
    const element = $('#non-existent')
    expect(element).toBeNull()
  })

  it('should work element.on as a addEventListener', () => {
    const element = $('#test')
    const fn = vi.fn()
    // @ts-expect-error add certain types later
    element.on('click', fn)
    element?.dispatchEvent(new Event('click'))
    expect(fn).toBeCalledTimes(1)
  })
})
