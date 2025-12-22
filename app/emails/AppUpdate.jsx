import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Heading,
  Hr,
  Link,
  Img,
  Preview,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

export default function AppUpdate({
  userName = 'Developer',
  appName = 'Vault',
  iconCid = 'app-icon',
}) {
  return (
    <Html>
      <Head />
      <Preview>Fresh updates to {appName} — faster, cleaner, and built for your success.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img src={`cid:${iconCid}`} width="56" height="56" alt="Logo" style={logo} />
            <Heading style={h1}>Introducing the new {appName}</Heading>
            <Text style={heroText}>Smarter studying with a cleaner, faster experience.</Text>
          </Section>

          <Section style={content}>
            <Text style={paragraph}>
              Hey <strong>{userName}</strong>,
            </Text>
            <Text style={paragraph}>
              We just rolled out our biggest update yet. It’s faster, easier to use, and crafted to
              help you discover previous‑year papers effortlessly.
            </Text>

            <Section style={gridContainer}>
              <Row>
                <Column>
                  <Text style={featureTitle}>📱 Install Directly</Text>
                  <Text style={featureText}>Add Vault to your home screen — instant access.</Text>
                </Column>
                <Column>
                  <Text style={featureTitle}>🛠️ Open Source</Text>
                  <Text style={featureText}>Built by students — contribute & boost your CV.</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text style={featureTitle}>⚡ Lightning Fast</Text>
                  <Text style={featureText}>Loads instantly when it matters most.</Text>
                </Column>
                <Column>
                  <Text style={featureTitle}>📣 Your Feedback</Text>
                  <Text style={featureText}>Tell us what to build next — we're listening.</Text>
                </Column>
              </Row>
            </Section>

            <Section style={ctaContainer}>
              <Text style={ctaText}>Ready to explore the update or contribute a feature?</Text>
              <Button style={button} href="https://github.com/your-repo">
                Open {appName}
              </Button>
            </Section>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>© 2025 {appName} • Built with ❤️ in India</Text>
            <Text style={footerLinks}>
              <Link href="https://github.com/harshchill/Vault" style={link}>GitHub</Link> •{' '}
              <Link href="www.linkedin.com/in/harsh-mahto-52b8a9295" style={link}>LinkedIn</Link> •{' '}
              <Link href="#" style={link}>Unsubscribe</Link>
            </Text>
            <Text style={footerAddress}>Satna, Madhya Pradesh, India</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles (inline for email clients)
const main = {
  backgroundColor: '#ECFDF5',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  marginBottom: '64px',
  maxWidth: '600px',
  borderRadius: '10px',
  boxShadow: '0 8px 28px rgba(5, 150, 105, 0.08)',
};

const header = {
  textAlign: 'center',
  paddingBottom: '20px',
};

const logo = {
  margin: '0 auto 16px',
  borderRadius: '9999px',
  border: '2px solid #059669',
};

const h1 = {
  color: '#065F46',
  fontSize: '24px',
  fontWeight: '800',
  lineHeight: '1.3',
  margin: '0',
};

const heroText = {
  fontSize: '15px',
  color: '#065F46',
  margin: '10px 0 0',
};

const content = {
  padding: '0 10px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#065F46',
  marginBottom: '20px',
};

const gridContainer = {
  background: '#F0FDF4',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '30px',
  border: '1px solid #BBF7D0',
};

const featureTitle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#065F46',
  marginBottom: '4px',
};

const featureText = {
  fontSize: '14px',
  color: '#065F46',
  margin: '0',
};

const ctaContainer = {
  textAlign: 'center',
  marginBottom: '20px',
};

const ctaText = {
  fontSize: '15px',
  color: '#065F46',
  marginBottom: '20px',
};

const button = {
  backgroundColor: '#059669',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: '700',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  padding: '12px 24px',
};

const hr = {
  borderColor: '#A7F3D0',
  margin: '40px 0 20px',
};

const footer = {
  textAlign: 'center',
};

const footerText = {
  fontSize: '12px',
  color: '#065F46',
  marginBottom: '10px',
};

const footerLinks = {
  fontSize: '12px',
  color: '#065F46',
  marginBottom: '10px',
};

const link = {
  color: '#059669',
  textDecoration: 'underline',
};

const footerAddress = {
  fontSize: '10px',
  color: '#10B981',
};