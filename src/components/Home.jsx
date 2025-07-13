function Home() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh' }}>
      {/* Hero Section - Cleaner Design */}
      <section style={{ 
        padding: '120px 0 80px', 
        backgroundColor: '#0a0a0a',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 213, 79, 0.08) 0%, rgba(255, 213, 79, 0.03) 25%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          {/* Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: '50px',
            padding: '8px 16px',
            marginBottom: '2rem',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#FFD54F',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}></div>
            <span style={{ color: '#FFD54F' }}>Live:</span>
            <span style={{ color: '#ccc' }}>Advanced AI document analysis</span>
          </div>

          {/* Main Headline */}
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: '800', 
            marginBottom: '1.5rem',
            color: '#ffffff',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #ffffff 0%, #FFD54F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Transform documents<br />
            into <span style={{ color: '#FFD54F' }}>actionable insights</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#aaa', 
            marginBottom: '2.5rem', 
            maxWidth: '600px', 
            margin: '0 auto 2.5rem',
            lineHeight: '1.6'
          }}>
            Unlock the power of AI-driven document analysis. Parse, understand, and interact with your content in ways never before possible.
          </p>

          {/* CTA Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginBottom: '4rem'
          }}>
            <button style={{
              backgroundColor: '#FFD54F',
              color: '#000',
              border: 'none',
              padding: '0.9rem 2rem',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 24px rgba(255, 213, 79, 0.3)'
            }}>
              Start Free Trial
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#FFD54F',
              border: '2px solid #FFD54F',
              padding: '0.9rem 2rem',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Watch Demo
            </button>
          </div>

          {/* Clean Product Preview */}
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            backgroundColor: '#1a1a1a',
            borderRadius: '16px',
            border: '1px solid #333',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            overflow: 'hidden'
          }}>
            {/* Browser Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '1rem 1.5rem',
              backgroundColor: '#111',
              borderBottom: '1px solid #333'
            }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#ff5f57', borderRadius: '50%' }}></div>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#ffbd2e', borderRadius: '50%' }}></div>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#28ca42', borderRadius: '50%' }}></div>
              <div style={{
                flex: 1,
                marginLeft: '1rem',
                backgroundColor: '#0a0a0a',
                borderRadius: '6px',
                padding: '0.5rem 1rem',
                border: '1px solid #333'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#28ca42',
                    borderRadius: '2px',
                    fontSize: '10px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>🔒</div>
                  <span style={{ color: '#aaa', fontSize: '13px' }}>lumina.app/dashboard</span>
                </div>
              </div>
            </div>

            {/* Interface Preview */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '3fr 2fr',
              gap: '0',
              height: '500px',
              backgroundColor: '#0a0a0a'
            }}>
              {/* Document View */}
              <div style={{
                padding: '2rem',
                borderRight: '1px solid #333',
                overflow: 'hidden'
              }}>
                {/* Document Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#FFD54F',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '30px',
                      backgroundColor: '#000',
                      borderRadius: '2px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '6px',
                        left: '4px',
                        right: '4px',
                        height: '2px',
                        backgroundColor: '#333',
                        borderRadius: '1px'
                      }}></div>
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '4px',
                        right: '4px',
                        height: '2px',
                        backgroundColor: '#333',
                        borderRadius: '1px'
                      }}></div>
                      <div style={{
                        position: 'absolute',
                        top: '14px',
                        left: '4px',
                        right: '4px',
                        height: '2px',
                        backgroundColor: '#333',
                        borderRadius: '1px'
                      }}></div>
                      <div style={{
                        position: 'absolute',
                        top: '18px',
                        left: '4px',
                        right: '4px',
                        height: '2px',
                        backgroundColor: '#333',
                        borderRadius: '1px'
                      }}></div>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '16px', color: '#fff', fontWeight: '600' }}>
                      Annual_Report_2024.pdf
                    </div>
                    <div style={{ fontSize: '13px', color: '#aaa' }}>
                      127 pages • AI analysis complete
                    </div>
                  </div>
                </div>
                
                {/* Document Content */}
                <div style={{
                  backgroundColor: '#111',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #333',
                  marginBottom: '1.5rem',
                  height: '240px',
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: '16px',
                    color: '#ccc',
                    lineHeight: '1.7',
                    marginBottom: '1rem'
                  }}>
                    "The company's revenue increased by <span style={{ backgroundColor: '#FFD54F', color: '#000', padding: '2px 6px', borderRadius: '4px', fontWeight: '600' }}>23.5%</span> in Q4, driven primarily by expansion into new markets and strategic partnerships..."
                  </div>
                  
                  <div style={{
                    fontSize: '14px',
                    color: '#999',
                    lineHeight: '1.6'
                  }}>
                    The growth was particularly strong in the technology sector, with new product launches contributing significantly to overall performance. Market expansion into European regions showed promising results...
                  </div>
                  
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '2rem',
                    right: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '0.5rem'
                    }}>
                      <span style={{ 
                        backgroundColor: '#FFD54F', 
                        color: '#000', 
                        padding: '4px 8px', 
                        borderRadius: '6px', 
                        fontSize: '11px',
                        fontWeight: '600'
                      }}>
                        Financial Data
                      </span>
                      <span style={{ 
                        backgroundColor: '#1a1a1a', 
                        color: '#FFD54F', 
                        padding: '4px 8px', 
                        borderRadius: '6px', 
                        fontSize: '11px',
                        border: '1px solid #333'
                      }}>
                        Performance Metrics
                      </span>
                    </div>
                    <span style={{ color: '#666', fontSize: '12px' }}>
                      Page 1 of 127
                    </span>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{ 
                    backgroundColor: '#1a1a1a', 
                    color: '#aaa', 
                    padding: '6px 12px', 
                    borderRadius: '8px', 
                    fontSize: '12px',
                    border: '1px solid #333'
                  }}>
                    Market Analysis
                  </span>
                  <span style={{ 
                    backgroundColor: '#1a1a1a', 
                    color: '#aaa', 
                    padding: '6px 12px', 
                    borderRadius: '8px', 
                    fontSize: '12px',
                    border: '1px solid #333'
                  }}>
                    Strategic Initiatives
                  </span>
                </div>
              </div>

              {/* Chatbot Panel */}
              <div style={{
                padding: '2rem',
                backgroundColor: '#111',
                display: 'flex',
                flexDirection: 'column',
                height: '500px'
              }}>
                {/* Chat Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid #333'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: '#FFD54F',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#000',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>
                      AI Assistant
                    </div>
                    <div style={{ color: '#28ca42', fontSize: '12px' }}>
                      ● Online
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  overflowY: 'auto',
                  marginBottom: '1rem'
                }}>
                  {/* AI Message */}
                  <div style={{
                    backgroundColor: '#1a1a1a',
                    padding: '1rem',
                    borderRadius: '12px 12px 12px 4px',
                    border: '1px solid #333'
                  }}>
                    <div style={{ fontSize: '12px', color: '#FFD54F', marginBottom: '0.5rem', fontWeight: '600' }}>
                      AI Assistant
                    </div>
                    <div style={{ fontSize: '13px', color: '#ccc', lineHeight: '1.4' }}>
                      I've analyzed the Q4 financial report. The 23.5% revenue growth is particularly impressive given market conditions.
                    </div>
                  </div>

                  {/* User Message */}
                  <div style={{
                    alignSelf: 'flex-end',
                    backgroundColor: '#FFD54F',
                    color: '#000',
                    padding: '1rem',
                    borderRadius: '12px 12px 4px 12px',
                    maxWidth: '80%'
                  }}>
                    <div style={{ fontSize: '13px', lineHeight: '1.4' }}>
                      What were the main drivers of growth?
                    </div>
                  </div>

                  {/* AI Response */}
                  <div style={{
                    backgroundColor: '#1a1a1a',
                    padding: '1rem',
                    borderRadius: '12px 12px 12px 4px',
                    border: '1px solid #333'
                  }}>
                    <div style={{ fontSize: '12px', color: '#FFD54F', marginBottom: '0.5rem', fontWeight: '600' }}>
                      AI Assistant
                    </div>
                    <div style={{ fontSize: '13px', color: '#ccc', lineHeight: '1.4' }}>
                      The key drivers were:
                      <br />• Market expansion (40% of growth)
                      <br />• New product launches (35%)
                      <br />• Strategic partnerships (25%)
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginTop: 'auto'
                }}>
                  <input
                    type="text"
                    placeholder="Ask about the document..."
                    style={{
                      flex: 1,
                      padding: '0.75rem 1rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '13px',
                      outline: 'none'
                    }}
                  />
                  <button style={{
                    backgroundColor: '#FFD54F',
                    color: '#000',
                    border: 'none',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos / Trust Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#666', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Trusted by leading organizations worldwide
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {/* Placeholder company logos */}
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} style={{
                height: '60px',
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #333'
              }}>
                <div style={{ 
                  fontSize: '24px', 
                  color: '#FFD54F',
                  fontWeight: '700'
                }}>
                  CO{i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#0a0a0a', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '3rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#FFD54F',
                marginBottom: '0.5rem'
              }}>
                99.8%
              </div>
              <div style={{ color: '#aaa', fontSize: '1.1rem' }}>
                Accuracy Rate
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#FFD54F',
                marginBottom: '0.5rem'
              }}>
                2.4M+
              </div>
              <div style={{ color: '#aaa', fontSize: '1.1rem' }}>
                Documents Processed
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#FFD54F',
                marginBottom: '0.5rem'
              }}>
                10,000+
              </div>
              <div style={{ color: '#aaa', fontSize: '1.1rem' }}>
                Active Users
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#FFD54F',
                marginBottom: '0.5rem'
              }}>
                50ms
              </div>
              <div style={{ color: '#aaa', fontSize: '1.1rem' }}>
                Average Response
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '100px 0', backgroundColor: '#111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              color: '#ffffff'
            }}>
              How it works
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#aaa', 
              maxWidth: '600px', 
              margin: '0 auto'
            }}>
              Three simple steps to transform your document workflow
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '3rem',
            position: 'relative'
          }}>
            {/* Step 1 */}
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '3rem',
              borderRadius: '20px',
              border: '1px solid #333',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '40px',
                backgroundColor: '#FFD54F',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                fontSize: '18px',
                fontWeight: '700'
              }}>
                1
              </div>
              
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#1a1a1a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                border: '1px solid #333'
              }}>
                <div style={{
                  width: '32px',
                  height: '38px',
                  backgroundColor: '#FFD54F',
                  borderRadius: '3px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '6px',
                    right: '6px',
                    height: '2px',
                    backgroundColor: '#000',
                    borderRadius: '1px'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '6px',
                    right: '6px',
                    height: '2px',
                    backgroundColor: '#000',
                    borderRadius: '1px'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '6px',
                    right: '6px',
                    height: '2px',
                    backgroundColor: '#000',
                    borderRadius: '1px'
                  }}></div>
                </div>
              </div>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#fff', 
                marginBottom: '1rem' 
              }}>
                Upload Document
              </h3>
              <p style={{ 
                color: '#aaa', 
                lineHeight: '1.6', 
                fontSize: '1rem' 
              }}>
                Simply drag and drop your PDF, Word, or text document into our platform
              </p>
            </div>

            {/* Step 2 */}
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '3rem',
              borderRadius: '20px',
              border: '1px solid #333',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '40px',
                backgroundColor: '#FFD54F',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                fontSize: '18px',
                fontWeight: '700'
              }}>
                2
              </div>
              
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#1a1a1a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                border: '1px solid #333'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'transparent',
                  border: '3px solid #FFD54F',
                  borderRadius: '50%',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: '-8px',
                    right: '-8px',
                    width: '10px',
                    height: '3px',
                    backgroundColor: '#FFD54F',
                    borderRadius: '2px',
                    transform: 'rotate(45deg)'
                  }}></div>
                </div>
              </div>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#fff', 
                marginBottom: '1rem' 
              }}>
                AI Analysis
              </h3>
              <p style={{ 
                color: '#aaa', 
                lineHeight: '1.6', 
                fontSize: '1rem' 
              }}>
                Our AI instantly analyzes structure, content, and context to understand your document
              </p>
            </div>

            {/* Step 3 */}
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '3rem',
              borderRadius: '20px',
              border: '1px solid #333',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '40px',
                backgroundColor: '#FFD54F',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                fontSize: '18px',
                fontWeight: '700'
              }}>
                3
              </div>
              
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#1a1a1a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                border: '1px solid #333'
              }}>
                <div style={{
                  width: '20px',
                  height: '28px',
                  backgroundColor: 'transparent',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'transparent',
                    border: '3px solid #FFD54F',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '0'
                  }}></div>
                  <div style={{
                    width: '10px',
                    height: '3px',
                    backgroundColor: '#FFD54F',
                    borderRadius: '2px',
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}></div>
                </div>
              </div>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#fff', 
                marginBottom: '1rem' 
              }}>
                Get Insights
              </h3>
              <p style={{ 
                color: '#aaa', 
                lineHeight: '1.6', 
                fontSize: '1rem' 
              }}>
                Interact with your document through chat, get summaries, and extract key information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '100px 0', backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              color: '#ffffff'
            }}>
              Powerful features for
              <span style={{ color: '#FFD54F' }}> document analysis</span>
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#aaa', 
              maxWidth: '600px', 
              margin: '0 auto'
            }}>
              Everything you need to understand, analyze, and extract insights from your documents
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
            {/* Smart Parsing */}
            <div style={{
              backgroundColor: '#111',
              padding: '3rem',
              borderRadius: '20px',
              border: '1px solid #333',
              position: 'relative'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#FFD54F',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: '28px',
                  height: '24px',
                  backgroundColor: 'transparent',
                  border: '3px solid #000',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '6px',
                    left: '6px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#000',
                    borderRadius: '50%'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#000',
                    borderRadius: '50%'
                  }}></div>
                </div>
              </div>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#fff', 
                marginBottom: '1rem' 
              }}>
                Intelligent Document Parsing
              </h3>
              <p style={{ 
                color: '#aaa', 
                lineHeight: '1.6', 
                fontSize: '1rem',
                marginBottom: '1.5rem'
              }}>
                Advanced AI algorithms automatically extract structure, identify key sections, and understand document context with 99.8% accuracy.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '16px', height: '16px', backgroundColor: '#FFD54F', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#ccc' }}>Structure Recognition</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '16px', height: '16px', backgroundColor: '#FFD54F', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#ccc' }}>Content Classification</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '16px', height: '16px', backgroundColor: '#FFD54F', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#ccc' }}>Semantic Understanding</span>
                </div>
              </div>
            </div>

            {/* Real-time Analysis */}
            <div style={{
              backgroundColor: '#111',
              padding: '3rem',
              borderRadius: '20px',
              border: '1px solid #333'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#FFD54F',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: '0',
                  height: '0',
                  borderLeft: '10px solid transparent',
                  borderRight: '4px solid transparent',
                  borderTop: '16px solid #000',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '6px',
                    left: '-6px',
                    width: '0',
                    height: '0',
                    borderLeft: '4px solid transparent',
                    borderRight: '10px solid transparent',
                    borderBottom: '16px solid #000'
                  }}></div>
                </div>
              </div>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#fff', 
                marginBottom: '1rem' 
              }}>
                Real-time Insights
              </h3>
              <p style={{ 
                color: '#aaa', 
                lineHeight: '1.6', 
                fontSize: '1rem',
                marginBottom: '1.5rem'
              }}>
                Get instant explanations and analysis as you highlight text. Interactive chat provides context-aware responses in under 50ms.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '16px', height: '16px', backgroundColor: '#FFD54F', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#ccc' }}>Instant Explanations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '16px', height: '16px', backgroundColor: '#FFD54F', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#ccc' }}>Context-Aware Chat</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '16px', height: '16px', backgroundColor: '#FFD54F', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#ccc' }}>Smart Suggestions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Feature */}
          <div style={{
            backgroundColor: '#111',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid #333'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }}>
              <div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#FFD54F',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'center',
                    gap: '2px'
                  }}>
                    <div style={{
                      width: '4px',
                      height: '12px',
                      backgroundColor: '#000',
                      borderRadius: '1px'
                    }}></div>
                    <div style={{
                      width: '4px',
                      height: '18px',
                      backgroundColor: '#000',
                      borderRadius: '1px'
                    }}></div>
                    <div style={{
                      width: '4px',
                      height: '8px',
                      backgroundColor: '#000',
                      borderRadius: '1px'
                    }}></div>
                    <div style={{
                      width: '4px',
                      height: '20px',
                      backgroundColor: '#000',
                      borderRadius: '1px'
                    }}></div>
                  </div>
                </div>
                
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '600', 
                  color: '#fff', 
                  marginBottom: '1rem' 
                }}>
                  Advanced Analytics Dashboard
                </h3>
                <p style={{ 
                  color: '#aaa', 
                  lineHeight: '1.6', 
                  fontSize: '1.1rem',
                  marginBottom: '2rem'
                }}>
                  Track your document analysis progress with detailed metrics, insights, and performance indicators. Monitor processing speed, accuracy rates, and content understanding.
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  <div style={{
                    backgroundColor: '#0a0a0a',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #333',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: '#FFD54F', fontSize: '24px', fontWeight: '700' }}>
                      1,247
                    </div>
                    <div style={{ color: '#aaa', fontSize: '14px' }}>
                      Concepts Identified
                    </div>
                  </div>
                  <div style={{
                    backgroundColor: '#0a0a0a',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #333',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: '#FFD54F', fontSize: '24px', fontWeight: '700' }}>
                      98.5%
                    </div>
                    <div style={{ color: '#aaa', fontSize: '14px' }}>
                      Accuracy Rate
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{
                backgroundColor: '#0a0a0a',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid #333'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{ color: '#FFD54F', fontSize: '16px', fontWeight: '600' }}>
                    Processing Analytics
                  </span>
                  <span style={{ color: '#fff', fontSize: '16px' }}>
                    Live Data
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ color: '#ccc', fontSize: '14px' }}>Document Analysis</span>
                      <span style={{ color: '#FFD54F', fontSize: '14px' }}>92%</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      backgroundColor: '#333',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '92%',
                        height: '100%',
                        backgroundColor: '#FFD54F',
                        borderRadius: '4px'
                      }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ color: '#ccc', fontSize: '14px' }}>Content Understanding</span>
                      <span style={{ color: '#FFD54F', fontSize: '14px' }}>87%</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      backgroundColor: '#333',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '87%',
                        height: '100%',
                        backgroundColor: '#FFD54F',
                        borderRadius: '4px'
                      }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ color: '#ccc', fontSize: '14px' }}>Insight Generation</span>
                      <span style={{ color: '#FFD54F', fontSize: '14px' }}>95%</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      backgroundColor: '#333',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '95%',
                        height: '100%',
                        backgroundColor: '#FFD54F',
                        borderRadius: '4px'
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section style={{ padding: '100px 0', backgroundColor: '#111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              color: '#ffffff'
            }}>
              Perfect for every
              <span style={{ color: '#FFD54F' }}> use case</span>
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#aaa', 
              maxWidth: '600px', 
              margin: '0 auto'
            }}>
              From research to business analysis, Lumina adapts to your needs
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem'
          }}>
            {/* Research */}
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #333'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#FFD54F',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: 'transparent',
                    border: '2px solid #000',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '0',
                    left: '6px'
                  }}></div>
                  <div style={{
                    width: '2px',
                    height: '8px',
                    backgroundColor: '#000',
                    position: 'absolute',
                    top: '14px',
                    left: '11px'
                  }}></div>
                  <div style={{
                    width: '8px',
                    height: '2px',
                    backgroundColor: '#000',
                    position: 'absolute',
                    bottom: '0',
                    left: '8px'
                  }}></div>
                </div>
              </div>
              
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                color: '#fff', 
                marginBottom: '1rem' 
              }}>
                Academic Research
              </h3>
              <p style={{ 
                color: '#aaa', 
                lineHeight: '1.6', 
                fontSize: '1rem',
                marginBottom: '1.5rem'
              }}>
                Analyze research papers, extract key findings, and understand complex academic content with AI assistance.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ fontSize: '14px', color: '#ccc' }}>
                  • Literature reviews
                </div>
                <div style={{ fontSize: '14px', color: '#ccc' }}>
                  • Citation analysis
                </div>
                <div style={{ fontSize: '14px', color: '#ccc' }}>
                  • Research summaries
                </div>
              </div>
            </div>

            {/* Business */}
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #333'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#FFD54F',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '24px',
                  height: '18px',
                  backgroundColor: 'transparent',
                  border: '2px solid #000',
                  borderRadius: '2px',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '8px',
                    height: '4px',
                    backgroundColor: '#000',
                    position: 'absolute',
                    top: '-6px',
                    left: '6px',
                    borderRadius: '2px 2px 0 0'
                  }}></div>
                  <div style={{
                    width: '16px',
                    height: '2px',
                    backgroundColor: '#000',
                    position: 'absolute',
                    top: '6px',
                    left: '2px'
                  }}></div>
                </div>
              </div>
              
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                color: '#fff', 
                marginBottom: '1rem' 
              }}>
                Business Analysis
              </h3>
              <p style={{ 
                color: '#aaa', 
                lineHeight: '1.6', 
                fontSize: '1rem',
                marginBottom: '1.5rem'
              }}>
                Process financial reports, contracts, and business documents to extract actionable insights quickly.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ fontSize: '14px', color: '#ccc' }}>
                  • Financial reports
                </div>
                <div style={{ fontSize: '14px', color: '#ccc' }}>
                  • Contract analysis
                </div>
                <div style={{ fontSize: '14px', color: '#ccc' }}>
                  • Market research
                </div>
              </div>
            </div>

            {/* Legal */}
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #333'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#FFD54F',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '24px',
                  height: '20px',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '20px',
                    height: '2px',
                    backgroundColor: '#000',
                    position: 'absolute',
                    top: '8px',
                    left: '2px'
                  }}></div>
                  <div style={{
                    width: '2px',
                    height: '12px',
                    backgroundColor: '#000',
                    position: 'absolute',
                    top: '4px',
                    left: '11px'
                  }}></div>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'transparent',
                    border: '1px solid #000',
                    borderRadius: '1px',
                    position: 'absolute',
                    top: '0',
                    left: '0'
                  }}></div>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'transparent',
                    border: '1px solid #000',
                    borderRadius: '1px',
                    position: 'absolute',
                    top: '0',
                    right: '0'
                  }}></div>
                </div>
              </div>
              
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                color: '#fff', 
                marginBottom: '1rem' 
              }}>
                Legal Documents
              </h3>
              <p style={{ 
                color: '#aaa', 
                lineHeight: '1.6', 
                fontSize: '1rem',
                marginBottom: '1.5rem'
              }}>
                Navigate complex legal texts, identify key clauses, and understand regulatory requirements efficiently.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ fontSize: '14px', color: '#ccc' }}>
                  • Contract review
                </div>
                <div style={{ fontSize: '14px', color: '#ccc' }}>
                  • Compliance checking
                </div>
                <div style={{ fontSize: '14px', color: '#ccc' }}>
                  • Case law analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '100px 0', backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              color: '#ffffff'
            }}>
              What our users say
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#aaa', 
              maxWidth: '600px', 
              margin: '0 auto'
            }}>
              Join thousands of professionals who trust Lumina for their document analysis needs
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem'
          }}>
            {/* Testimonial 1 */}
            <div style={{
              backgroundColor: '#111',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #333'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  gap: '4px',
                  marginBottom: '1rem'
                }}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#FFD54F',
                      borderRadius: '50%'
                    }}></div>
                  ))}
                </div>
                <p style={{ 
                  color: '#ccc', 
                  lineHeight: '1.6', 
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  "Lumina has revolutionized how I handle research papers. What used to take hours now takes minutes. The AI insights are incredibly accurate."
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#FFD54F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: '#000',
                  fontWeight: '700'
                }}>
                  DR
                </div>
                <div>
                  <div style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>
                    Dr. Sarah Chen
                  </div>
                  <div style={{ color: '#aaa', fontSize: '12px' }}>
                    Research Scientist
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div style={{
              backgroundColor: '#111',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #333'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  gap: '4px',
                  marginBottom: '1rem'
                }}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#FFD54F',
                      borderRadius: '50%'
                    }}></div>
                  ))}
                </div>
                <p style={{ 
                  color: '#ccc', 
                  lineHeight: '1.6', 
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  "The accuracy and speed of document analysis is unmatched. Our team's productivity has increased by 300% since implementing Lumina."
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#FFD54F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: '#000',
                  fontWeight: '700'
                }}>
                  MJ
                </div>
                <div>
                  <div style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>
                    Michael Johnson
                  </div>
                  <div style={{ color: '#aaa', fontSize: '12px' }}>
                    Business Analyst
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div style={{
              backgroundColor: '#111',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #333'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  gap: '4px',
                  marginBottom: '1rem'
                }}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#FFD54F',
                      borderRadius: '50%'
                    }}></div>
                  ))}
                </div>
                <p style={{ 
                  color: '#ccc', 
                  lineHeight: '1.6', 
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  "Finally, a tool that understands context. Legal document review has never been this efficient. Highly recommended for any law firm."
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#FFD54F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: '#000',
                  fontWeight: '700'
                }}>
                  EP
                </div>
                <div>
                  <div style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>
                    Emily Parker
                  </div>
                  <div style={{ color: '#aaa', fontSize: '12px' }}>
                    Senior Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '100px 0', backgroundColor: '#111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              color: '#ffffff'
            }}>
              Why professionals choose
              <span style={{ color: '#FFD54F' }}> Lumina</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
            {/* Speed */}
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #333',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#FFD54F',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <div style={{
                  width: '0',
                  height: '0',
                  borderLeft: '14px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '20px solid #000',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '-8px',
                    width: '0',
                    height: '0',
                    borderLeft: '6px solid transparent',
                    borderRight: '14px solid transparent',
                    borderBottom: '20px solid #000'
                  }}></div>
                </div>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                color: '#fff', 
                marginBottom: '1rem' 
              }}>
                Lightning Fast
              </h3>
              <p style={{ 
                color: '#aaa', 
                lineHeight: '1.6', 
                fontSize: '1rem' 
              }}>
                Process documents 100x faster than manual analysis. Get insights in seconds, not hours.
              </p>
            </div>

            {/* Accuracy */}
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #333',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#FFD54F',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'transparent',
                    border: '3px solid #000',
                    borderRadius: '50%',
                    position: 'absolute'
                  }}></div>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'transparent',
                    border: '2px solid #000',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '6px',
                    left: '6px'
                  }}></div>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#000',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '12px',
                    left: '12px'
                  }}></div>
                </div>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                color: '#fff', 
                marginBottom: '1rem' 
              }}>
                Highly Accurate
              </h3>
              <p style={{ 
                color: '#aaa', 
                lineHeight: '1.6', 
                fontSize: '1rem' 
              }}>
                99.8% accuracy rate in content analysis and information extraction from complex documents.
              </p>
            </div>

            {/* Intuitive */}
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #333',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#FFD54F',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '2px',
                    height: '12px',
                    backgroundColor: '#000',
                    position: 'absolute',
                    top: '6px',
                    left: '11px'
                  }}></div>
                  <div style={{
                    width: '12px',
                    height: '2px',
                    backgroundColor: '#000',
                    position: 'absolute',
                    top: '11px',
                    left: '6px'
                  }}></div>
                  <div style={{
                    width: '2px',
                    height: '8px',
                    backgroundColor: '#000',
                    position: 'absolute',
                    top: '0',
                    left: '2px',
                    transform: 'rotate(45deg)',
                    transformOrigin: 'center'
                  }}></div>
                  <div style={{
                    width: '2px',
                    height: '8px',
                    backgroundColor: '#000',
                    position: 'absolute',
                    top: '0',
                    right: '2px',
                    transform: 'rotate(-45deg)',
                    transformOrigin: 'center'
                  }}></div>
                </div>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                color: '#fff', 
                marginBottom: '1rem' 
              }}>
                Intuitive Interface
              </h3>
              <p style={{ 
                color: '#aaa', 
                lineHeight: '1.6', 
                fontSize: '1rem' 
              }}>
                User-friendly design that requires no training. Start analyzing documents immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ 
        padding: '100px 0', 
        backgroundColor: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 70%, rgba(255, 213, 79, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            color: '#ffffff'
          }}>
            Ready to revolutionize your
            <span style={{ color: '#FFD54F' }}> document workflow?</span>
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            color: '#aaa', 
            marginBottom: '3rem',
            lineHeight: '1.6'
          }}>
            Join thousands of professionals who have transformed their document analysis process with Lumina.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginBottom: '3rem'
          }}>
            <button style={{
              backgroundColor: '#FFD54F',
              color: '#000',
              border: 'none',
              padding: '1.5rem 3rem',
              borderRadius: '12px',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 32px rgba(255, 213, 79, 0.3)'
            }}>
              Start Free Trial
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#FFD54F',
              border: '2px solid #FFD54F',
              padding: '1.5rem 3rem',
              borderRadius: '12px',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Schedule Demo
            </button>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            fontSize: '14px',
            color: '#666'
          }}>
            <span>✓ No credit card required</span>
            <span>✓ 14-day free trial</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 