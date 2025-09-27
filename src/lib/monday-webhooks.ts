/**
 * Monday.com Webhook Handler
 * Handles real-time updates from Monday.com
 */

import { NextRequest, NextResponse } from 'next/server'
import { mondayApi } from './monday-api'

// Webhook secret for verification (set this in your environment variables)
// const WEBHOOK_SECRET = process.env.MONDAY_WEBHOOK_SECRET || 'your-webhook-secret'

export interface MondayWebhookPayload {
  challenge?: string
  event?: {
    type: string
    boardId: string
    itemId: string
    userId: string
    timestamp: string
  }
}

/**
 * Verify webhook signature
 */
function verifyWebhookSignature(payload: string, signature: string): boolean {
  // In a real implementation, you would verify the webhook signature
  // using Monday.com's webhook verification method
  // For now, we'll just check if the signature exists
  return Boolean(signature && signature.length > 0)
}

/**
 * Handle Monday.com webhook events
 */
export async function handleMondayWebhook(request: NextRequest) {
  try {
    const signature = request.headers.get('x-monday-signature')
    const payload = await request.text()
    
    // Verify webhook signature
    if (!verifyWebhookSignature(payload, signature || '')) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const data: MondayWebhookPayload = JSON.parse(payload)
    
    // Handle challenge (for webhook verification)
    if (data.challenge) {
      return NextResponse.json({ challenge: data.challenge })
    }

    // Handle webhook event
    if (data.event) {
      await processWebhookEvent(data.event)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

/**
 * Process webhook events
 */
async function processWebhookEvent(event: MondayWebhookPayload['event']) {
  if (!event) return

  const { type, boardId, itemId } = event

  console.log(`Monday.com webhook event: ${type} for item ${itemId} in board ${boardId}`)

  switch (type) {
    case 'create_pulse':
      await handleItemCreated(boardId, itemId)
      break
    case 'update_pulse':
      await handleItemUpdated(boardId, itemId)
      break
    case 'delete_pulse':
      await handleItemDeleted(boardId, itemId)
      break
    case 'change_column_value':
      await handleColumnValueChanged(boardId, itemId)
      break
    default:
      console.log(`Unhandled webhook event type: ${type}`)
  }
}

/**
 * Handle item created event
 */
async function handleItemCreated(boardId: string, itemId: string) {
  try {
    // Fetch the new item from Monday.com
    const classes = await mondayApi.getClasses()
    const newClass = classes.find(cls => cls.id === itemId)
    
    if (newClass) {
      console.log('New class created:', newClass.name)
      // Here you could:
      // - Send notifications
      // - Update your local cache
      // - Trigger other integrations
    }
  } catch (error) {
    console.error('Error handling item created:', error)
  }
}

/**
 * Handle item updated event
 */
async function handleItemUpdated(boardId: string, itemId: string) {
  try {
    // Fetch the updated item from Monday.com
    const classes = await mondayApi.getClasses()
    const updatedClass = classes.find(cls => cls.id === itemId)
    
    if (updatedClass) {
      console.log('Class updated:', updatedClass.name)
      // Here you could:
      // - Update your local cache
      // - Send notifications about changes
      // - Trigger other integrations
    }
  } catch (error) {
    console.error('Error handling item updated:', error)
  }
}

/**
 * Handle item deleted event
 */
async function handleItemDeleted(boardId: string, itemId: string) {
  try {
    console.log('Class deleted:', itemId)
    // Here you could:
    // - Remove from your local cache
    // - Send notifications about cancellation
    // - Update related systems
  } catch (error) {
    console.error('Error handling item deleted:', error)
  }
}

/**
 * Handle column value changed event
 */
async function handleColumnValueChanged(boardId: string, itemId: string) {
  try {
    // Fetch the updated item from Monday.com
    const classes = await mondayApi.getClasses()
    const updatedClass = classes.find(cls => cls.id === itemId)
    
    if (updatedClass) {
      console.log('Class column updated:', updatedClass.name)
      // Here you could:
      // - Update specific fields in your local cache
      // - Send targeted notifications
      // - Trigger specific integrations based on which column changed
    }
  } catch (error) {
    console.error('Error handling column value changed:', error)
  }
}

/**
 * Set up webhook in Monday.com
 * This would typically be done through the Monday.com admin interface
 * or via their API
 */
export async function setupMondayWebhook(webhookUrl: string) {
  // This is a placeholder - in practice, you would:
  // 1. Use Monday.com's API to create a webhook
  // 2. Or guide the user through the admin interface
  
  console.log(`To set up webhook, go to Monday.com admin and add webhook URL: ${webhookUrl}`)
  
  return {
    webhookUrl,
    instructions: [
      '1. Go to Monday.com admin panel',
      '2. Navigate to Integrations > Webhooks',
      '3. Click "Add Webhook"',
      `4. Enter URL: ${webhookUrl}`,
      '5. Select events: create_pulse, update_pulse, delete_pulse, change_column_value',
      '6. Select your board: Hidden Lotus Classes',
      '7. Save the webhook'
    ]
  }
}
