import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const projectRoot = process.env.DR_NEKRASHEVICH_PROJECT_ROOT
  ? path.resolve(process.env.DR_NEKRASHEVICH_PROJECT_ROOT)
  : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(path.join(projectRoot, 'package.json'))
const postcss = require('postcss')
const tailwind = require('@tailwindcss/postcss')
const stylesheetPath = process.env.DR_NEKRASHEVICH_STYLESHEET
  ? path.resolve(process.env.DR_NEKRASHEVICH_STYLESHEET)
  : path.join(projectRoot, 'styles/globals.css')
const source = await readFile(stylesheetPath, 'utf8')
const compiled = await postcss([tailwind()]).process(source, {
  from: path.join(projectRoot, 'styles/globals.css'),
  map: false,
})
const tokens = {}

compiled.root.walkRules((rule) => {
  if (rule.selector.split(',').some((selector) => [':root', ':host'].includes(selector.trim()))) {
    rule.walkDecls(/^--/, (declaration) => {
      tokens[declaration.prop] = declaration.value
    })
  }
})

test('compiled site styles expose the Figma Make UI-kit palette and typography', () => {
  assert.equal(tokens['--color-primary'], '#174c55')
  assert.equal(tokens['--color-secondary'], '#52686d')
  assert.equal(tokens['--color-light-bg'], '#eef6f7')
  assert.equal(tokens['--color-brand-100'], '#c9e4e4')
  assert.equal(tokens['--color-brand-300'], '#c9e4e4')
  assert.equal(tokens['--color-surface'], '#ffffff')
  assert.equal(tokens['--font-sans'], 'Manrope, ui-sans-serif, system-ui, sans-serif')
  assert.equal(tokens['--font-display'], 'Prata, Georgia, serif')
})

test('compiled site styles expose the Figma Make UI-kit geometry', () => {
  const spacingSteps = ['0.25rem', '0.5rem', '0.75rem', '1rem', '1.5rem', '2rem', '3rem', '4rem', '6rem']
  spacingSteps.forEach((value, index) => {
    assert.equal(tokens[`--space-${index + 1}`], value)
  })
  assert.equal(tokens['--spacing-gutter-sm'], 'var(--space-4)')
  assert.equal(tokens['--spacing-gutter-md'], 'var(--space-6)')
  assert.equal(tokens['--spacing-gutter-lg'], 'clamp(var(--space-6), 4vw, var(--space-7))')
  assert.equal(tokens['--radius-xl'], '1rem')
  assert.equal(tokens['--radius-2xl'], '1.5rem')
  assert.equal(tokens['--container-site'], '77.5rem')
  assert.equal(tokens['--shadow-soft'], '0 12px 36px rgb(23 76 85 / 6%)')
})
