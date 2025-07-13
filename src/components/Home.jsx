function Home() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '120px 0 80px', 
        backgroundColor: '#0a0a0a',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 213, 79, 0.1) 0%, rgba(255, 213, 79, 0.05) 25%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          {/* Badge */}
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
            <span style={{ color: '#FFD54F' }}>New:</span>
            <span style={{ color: '#ccc' }}>Advanced document parsing now available</span>
          </div>

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
            fontSize: '1.4rem', 
            color: '#aaa', 
            marginBottom: '3rem', 
            maxWidth: '700px', 
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Unlock the power of intelligent document analysis. Parse, understand, and interact with your content like never before.
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginBottom: '5rem'
          }}>
            <button style={{
              backgroundColor: '#FFD54F',
              color: '#000',
              border: 'none',
              padding: '1.2rem 2.5rem',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 32px rgba(255, 213, 79, 0.3)',
              transform: 'translateY(0px)'
            }}>
              Start Analyzing
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#FFD54F',
              border: '2px solid #FFD54F',
              padding: '1.2rem 2.5rem',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Watch Demo
            </button>
          </div>

          {/* Interactive Demo Preview */}
          <div style={{
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto',
            backgroundColor: '#111',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid #333',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Demo Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '1.5rem'
            }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#ff5f57', borderRadius: '50%' }}></div>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#ffbd2e', borderRadius: '50%' }}></div>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#28ca42', borderRadius: '50%' }}></div>
              <span style={{ marginLeft: '1rem', color: '#666', fontSize: '14px' }}>lumina.app/analysis</span>
            </div>

            {/* Demo Content */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '2rem',
              minHeight: '400px'
            }}>
              {/* Document Preview */}
              <div style={{
                backgroundColor: '#0a0a0a',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #333',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: '12px',
                  color: '#FFD54F',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  📄 Research_Paper_2024.pdf
                </div>
                
                <div style={{
                  fontSize: '14px',
                  color: '#ccc',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ backgroundColor: '#FFD54F', color: '#000', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>
                      HIGHLIGHTED
                    </span>
                  </div>
                  <div style={{ backgroundColor: '#2a2a2a', padding: '1rem', borderRadius: '8px', border: '1px solid #FFD54F' }}>
                    "Machine learning algorithms have demonstrated remarkable capabilities in natural language processing tasks, particularly in document analysis and information extraction..."
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}>
                  <span style={{ 
                    backgroundColor: '#1a1a1a', 
                    color: '#FFD54F', 
                    padding: '4px 8px', 
                    borderRadius: '6px', 
                    fontSize: '12px',
                    border: '1px solid #333'
                  }}>
                    Page 1 of 47
                  </span>
                  <span style={{ 
                    backgroundColor: '#1a1a1a', 
                    color: '#aaa', 
                    padding: '4px 8px', 
                    borderRadius: '6px', 
                    fontSize: '12px',
                    border: '1px solid #333'
                  }}>
                    85% analyzed
                  </span>
                </div>
              </div>

              {/* Chat Interface */}
              <div style={{
                backgroundColor: '#0a0a0a',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #333',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#28ca42',
                    borderRadius: '50%'
                  }}></div>
                  <span style={{ color: '#FFD54F', fontSize: '14px', fontWeight: '600' }}>
                    AI Assistant
                  </span>
                </div>

                <div style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  <div style={{
                    backgroundColor: '#1a1a1a',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid #333'
                  }}>
                    <div style={{ fontSize: '12px', color: '#FFD54F', marginBottom: '0.5rem' }}>
                      Analysis Complete
                    </div>
                    <div style={{ fontSize: '14px', color: '#ccc', lineHeight: '1.4' }}>
                      This section discusses ML algorithms in NLP. Key concepts: tokenization, semantic analysis, and feature extraction.
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: '#1a1a1a',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid #333'
                  }}>
                    <div style={{ fontSize: '12px', color: '#FFD54F', marginBottom: '0.5rem' }}>
                      Suggested Questions
                    </div>
                    <div style={{ fontSize: '13px', color: '#aaa', lineHeight: '1.4' }}>
                      • What are the main ML techniques mentioned?<br />
                      • How does this relate to document processing?<br />
                      • Can you explain tokenization simply?
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}>
                  <input
                    type="text"
                    placeholder="Ask about this section..."
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      backgroundColor: '#1a1a1a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                  <button style={{
                    backgroundColor: '#FFD54F',
                    color: '#000',
                    border: 'none',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontSize: '14px',
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

      {/* Features Section */}
      <section style={{ padding: '100px 0', backgroundColor: '#111' }}>
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

          {/* Feature Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '5rem' }}>
            {/* Smart Parsing */}
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '3rem',
              borderRadius: '20px',
              border: '1px solid #333',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(255, 213, 79, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(30px, -30px)'
              }}></div>
              
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
                  backgroundColor: '#000',
                  borderRadius: '4px'
                }}></div>
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
                Advanced AI algorithms automatically extract structure, identify key sections, and understand document context.
              </p>
              
              <div style={{
                backgroundColor: '#1a1a1a',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid #333'
              }}>
                <div style={{ fontSize: '12px', color: '#FFD54F', marginBottom: '0.5rem' }}>
                  ✓ Structure Recognition
                </div>
                <div style={{ fontSize: '12px', color: '#FFD54F', marginBottom: '0.5rem' }}>
                  ✓ Content Classification
                </div>
                <div style={{ fontSize: '12px', color: '#FFD54F' }}>
                  ✓ Semantic Understanding
                </div>
              </div>
            </div>

            {/* Real-time Analysis */}
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '3rem',
              borderRadius: '20px',
              border: '1px solid #333',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(255, 213, 79, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(-30px, -30px)'
              }}></div>
              
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
                  backgroundColor: '#000',
                  borderRadius: '50%'
                }}></div>
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
                Get instant explanations and analysis as you highlight text. Interactive chat provides context-aware responses.
              </p>
              
              <div style={{
                backgroundColor: '#1a1a1a',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid #333'
              }}>
                <div style={{ fontSize: '12px', color: '#FFD54F', marginBottom: '0.5rem' }}>
                  ✓ Instant Explanations
                </div>
                <div style={{ fontSize: '12px', color: '#FFD54F', marginBottom: '0.5rem' }}>
                  ✓ Context-Aware Chat
                </div>
                <div style={{ fontSize: '12px', color: '#FFD54F' }}>
                  ✓ Smart Suggestions
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Feature Demo */}
          <div style={{
            backgroundColor: '#0a0a0a',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid #333',
            position: 'relative'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }}>
              <div>
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
                  Track your document analysis progress with detailed metrics, insights, and performance indicators.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#FFD54F',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        backgroundColor: '#000',
                        borderRadius: '2px'
                      }}></div>
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: '600', fontSize: '14px' }}>
                        Document Processing Speed
                      </div>
                      <div style={{ color: '#aaa', fontSize: '12px' }}>
                        99.7% faster than traditional methods
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#FFD54F',
                      borderRadius: '10px',
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
                      <div style={{ color: '#fff', fontWeight: '600', fontSize: '14px' }}>
                        Accuracy Rate
                      </div>
                      <div style={{ color: '#aaa', fontSize: '12px' }}>
                        98.5% precision in content analysis
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid #333'
              }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ color: '#FFD54F', fontSize: '14px', fontWeight: '600' }}>
                      Analysis Progress
                    </span>
                    <span style={{ color: '#fff', fontSize: '14px' }}>
                      87%
                    </span>
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
                      borderRadius: '4px',
                      transition: 'width 0.3s ease'
                    }}></div>
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  <div style={{
                    backgroundColor: '#0a0a0a',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid #333',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: '#FFD54F', fontSize: '20px', fontWeight: '700' }}>
                      1,247
                    </div>
                    <div style={{ color: '#aaa', fontSize: '12px' }}>
                      Concepts Identified
                    </div>
                  </div>
                  <div style={{
                    backgroundColor: '#0a0a0a',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid #333',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: '#FFD54F', fontSize: '20px', fontWeight: '700' }}>
                      43
                    </div>
                    <div style={{ color: '#aaa', fontSize: '12px' }}>
                      Pages Analyzed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '100px 0', backgroundColor: '#0a0a0a' }}>
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
              backgroundColor: '#111',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #333',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
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
                  backgroundColor: '#000',
                  borderRadius: '4px'
                }}></div>
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
              backgroundColor: '#111',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #333',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
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
                  backgroundColor: '#000',
                  borderRadius: '50%'
                }}></div>
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
              backgroundColor: '#111',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #333',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
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
                  backgroundColor: '#000',
                  borderRadius: '6px'
                }}></div>
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

      {/* CTA Section */}
      <section style={{ 
        padding: '100px 0', 
        backgroundColor: '#111',
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