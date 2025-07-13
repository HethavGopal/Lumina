function PDFParser() {
  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#ffffff', 
      minHeight: '100vh',
      padding: '2rem'
    }}>
              <div style={{ 
          maxWidth: '1600px', 
          margin: '0 auto',
          height: 'calc(100vh - 120px)' // Account for navigation and padding
        }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: '2.2rem', 
            fontWeight: '700', 
            marginBottom: '0.5rem',
            color: '#ffffff'
          }}>
            Document Analysis
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: '#aaa', 
            margin: 0
          }}>
            Analyze documents with intelligent insights and explanations
          </p>
        </div>

        {/* Main Content Area */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '4fr 1fr',
          gap: '2rem',
          height: 'calc(100vh - 200px)'
        }}>
          {/* PDF Viewer Section */}
          <div style={{
            backgroundColor: '#111',
            border: '1px solid #333',
            borderRadius: '12px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#ffffff',
                margin: 0
              }}>
                Document Viewer
              </h2>
            </div>

            {/* PDF Placeholder */}
            <div style={{
              flex: 1,
              backgroundColor: '#1a1a1a',
              border: '2px dashed #444',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#FFD54F',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '24px',
                  height: '32px',
                  backgroundColor: '#000',
                  borderRadius: '2px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '4px',
                    left: '4px',
                    right: '4px',
                    height: '2px',
                    backgroundColor: '#333'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '4px',
                    right: '4px',
                    height: '2px',
                    backgroundColor: '#333'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '4px',
                    right: '4px',
                    height: '2px',
                    backgroundColor: '#333'
                  }}></div>
                </div>
              </div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}>
                No document selected
              </h3>
              <p style={{ 
                color: '#aaa', 
                fontSize: '14px',
                marginBottom: '1rem'
              }}>
                Select a document from the available library to start analyzing
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                fontSize: '12px',
                color: '#666'
              }}>
                <span>• Browse document library</span>
                <span>• Intelligent parsing</span>
                <span>• Interactive explanations</span>
              </div>
            </div>

            {/* PDF Controls */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#0a0a0a',
              borderRadius: '6px',
              border: '1px solid #333'
            }}>
              <button style={{
                backgroundColor: '#333',
                color: '#888',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'not-allowed'
              }}>
                Previous
              </button>
              <span style={{ color: '#aaa', fontSize: '14px' }}>
                Page - of -
              </span>
              <button style={{
                backgroundColor: '#333',
                color: '#888',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'not-allowed'
              }}>
                Next
              </button>
            </div>
          </div>

          {/* Chatbot Section */}
          <div style={{
            backgroundColor: '#111',
            border: '1px solid #333',
            borderRadius: '12px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#4CAF50',
                borderRadius: '50%'
              }}></div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#ffffff',
                margin: 0
              }}>
                Chat Assistant
              </h2>
            </div>

            {/* Chat Messages Area */}
            <div style={{
              flex: 1,
              backgroundColor: '#1a1a1a',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1rem',
              overflowY: 'auto',
              border: '1px solid #333'
            }}>
                            {/* Welcome Message */}
              <div style={{
                backgroundColor: '#2a2a2a',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                border: '1px solid #333'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#FFD54F',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: '#000',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                  <span style={{ color: '#FFD54F', fontSize: '14px', fontWeight: '500' }}>
                    Assistant
                  </span>
                </div>
                <p style={{ 
                  color: '#ccc', 
                  fontSize: '14px',
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  👋 Hi! I'm your document analysis assistant. Select a document and I'll help you understand any complex concepts. 
                  You can highlight text in the document or ask me questions directly.
                </p>
              </div>

              {/* Placeholder for future messages */}
              <div style={{
                textAlign: 'center',
                color: '#666',
                fontSize: '14px',
                fontStyle: 'italic',
                marginTop: '2rem'
              }}>
                Your conversation will appear here...
              </div>
            </div>

            {/* Chat Input */}
            <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>
              <input
                type="text"
                placeholder="Ask about the document content..."
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid #333',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none'
                }}
                disabled
              />
              <button style={{
                backgroundColor: '#FFD54F',
                color: '#000',
                border: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'not-allowed',
                opacity: 0.6
              }}>
                Send
              </button>
            </div>

                        {/* Chat Features */}
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#0a0a0a',
              borderRadius: '6px',
              fontSize: '12px',
              color: '#666',
              border: '1px solid #333'
            }}>
              <div style={{ marginBottom: '0.5rem', fontWeight: '500', color: '#FFD54F' }}>
                Features available:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div>• Explain highlighted text</div>
                <div>• Answer questions about document</div>
                <div>• Generate study notes</div>
                <div>• Create practice questions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFParser; 